"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Cambia 'next/router' a 'next/navigation'
import Step1 from '../components/steps/Step1';
import Step2 from '../components/steps/Step2';
import Step3 from '../components/steps/Step3';
import Step4A from '../components/steps/Step4A';
import Step4B from '../components/steps/Step4B';
import Step5 from '../components/steps/Step5';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    username: '',
    password: '',
    confirmPassword: '',
    userProfile: '',
    dateOfBirth: '',
    gender: '',
    companyName: '',
    companySize: '',
    roleInCompany: '',
    receiveNotifications: false,
    referralSource: '',
    termsAccepted: false,
  });
  const [step, setStep] = useState(1);
  const router = useRouter(); // Usa 'next/navigation'

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    const url = formData.userProfile === 'Personal'
      ? 'https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942'
      : 'https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        sessionStorage.setItem('formData', JSON.stringify(formData));
        router.push('/summary');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      alert('Error al enviar el formulario');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 4:
        return formData.userProfile === 'Personal' ? (
          <Step4A
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : (
          <Step4B
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            handlePreviousStep={handlePreviousStep}
          />
        );
      default:
        return null;
    }
  };

  const stepTitles = [
    'Información Personal',
    'Dirección',
    'Cuenta',
    'Información de Negocios',
    'Preferencias',
  ];

  const handleStepClick = (index: number) => {
    setStep(index + 1);
  };

  return (
    <div className="container mx-auto mt-5 max-w-lg bg-white shadow-md rounded-lg">
      <div className="flex justify-between mb-6">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            onClick={() => handleStepClick(index)}
            className={`cursor-pointer px-4 py-2 text-sm font-medium ${
              index + 1 === step ? 'text-blue-500 border-b-2 border-blue-500' : ''
            }`}
          >
            {title}
          </div>
        ))}
      </div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
