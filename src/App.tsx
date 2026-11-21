/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { MedicationDetailsScreen } from './components/MedicationDetailsScreen';
import { PrescriptionScreen } from './components/PrescriptionScreen';
import { SearchResultsScreen } from './components/SearchResultsScreen';
import { MEDICATIONS_DATA, SAMPLE_PRESCRIPTIONS } from './data/medications';
import { ScreenId } from './types/medication';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<
    'todos' | 'farmacia_popular' | 'uso_continuo'
  >('todos');
  const [selectedMedicationId, setSelectedMedicationId] = useState<string>(
    MEDICATIONS_DATA[0].id
  );
  const [detailsBackSource, setDetailsBackSource] = useState<'results' | 'prescription'>(
    'results'
  );

  // Prescription screen state preserved across navigation to Details and back
  const [selectedSampleId, setSelectedSampleId] = useState<string>(
    SAMPLE_PRESCRIPTIONS[0].id
  );
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [prescriptionProcessed, setPrescriptionProcessed] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentScreen, selectedMedicationId]);

  const handleNavigateHome = () => {
    setCurrentScreen('home');
  };

  const handleSearchFromHome = (query: string) => {
    setSearchQuery(query);
    setActiveFilter('todos');
    setCurrentScreen('results');
  };

  const handleOpenCatalog = (
    filter: 'todos' | 'farmacia_popular' | 'uso_continuo' = 'todos'
  ) => {
    setSearchQuery('');
    setActiveFilter(filter);
    setCurrentScreen('results');
  };

  const handleOpenPrescription = () => {
    setCurrentScreen('prescription');
  };

  const handleSelectMedicationFromResults = (medicationId: string) => {
    setSelectedMedicationId(medicationId);
    setDetailsBackSource('results');
    setCurrentScreen('details');
  };

  const handleSelectMedicationFromPrescription = (medicationId: string) => {
    setSelectedMedicationId(medicationId);
    setDetailsBackSource('prescription');
    setCurrentScreen('details');
  };

  const handleBackFromDetails = () => {
    setCurrentScreen(detailsBackSource);
  };

  const selectedMedication =
    MEDICATIONS_DATA.find((med) => med.id === selectedMedicationId) ??
    MEDICATIONS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2C59]">
      <Header
        currentScreen={currentScreen}
        activeFilter={activeFilter}
        onNavigateHome={handleNavigateHome}
        onNavigateMedications={handleOpenCatalog}
        onNavigatePrescription={handleOpenPrescription}
      />

      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onSearch={handleSearchFromHome}
            onOpenCatalog={handleOpenCatalog}
            onOpenPrescription={handleOpenPrescription}
          />
        )}

        {currentScreen === 'results' && (
          <SearchResultsScreen
            searchQuery={searchQuery}
            activeFilter={activeFilter}
            medications={MEDICATIONS_DATA}
            onSearchChange={setSearchQuery}
            onFilterChange={setActiveFilter}
            onSelectMedication={handleSelectMedicationFromResults}
            onBackHome={handleNavigateHome}
          />
        )}

        {currentScreen === 'details' && (
          <MedicationDetailsScreen
            medication={selectedMedication}
            backSource={detailsBackSource}
            onBack={handleBackFromDetails}
            onBackHome={handleNavigateHome}
          />
        )}

        {currentScreen === 'prescription' && (
          <PrescriptionScreen
            medications={MEDICATIONS_DATA}
            selectedSampleId={selectedSampleId}
            uploadedFileName={uploadedFileName}
            hasProcessed={prescriptionProcessed}
            onSelectSample={setSelectedSampleId}
            onFileSelected={setUploadedFileName}
            onProcessedChange={setPrescriptionProcessed}
            onSelectMedication={handleSelectMedicationFromPrescription}
            onBackHome={handleNavigateHome}
          />
        )}
      </main>

      <Footer onNavigate={(screen) => setCurrentScreen(screen)} />
    </div>
  );
}
