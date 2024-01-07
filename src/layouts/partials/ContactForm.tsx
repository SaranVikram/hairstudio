"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface IContactFormState {
  fullName: string;
  mobileNumber: string;
}

const ContactForm: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  // State for form input fields
  const [formData, setFormData] = useState<IContactFormState>({
    fullName: "",
    mobileNumber: "",
  });
  // service types and budget estimates defined as arrays of objects
  const serviceTypes = [
    { value: "Hair Replacement", label: "Hair Replacement" },
    { value: "Hair Transplantation", label: "Hair Transplantation" },
    { value: "Hair Build Fibers", label: "Hair Build Fibers" },
    { value: "Hair Wigs", label: "Hair Wigs" },
    { value: "Hair Clip System", label: "Hair Clip System" },
    { value: "Hair Extensions", label: "Hair Extensions" },
  ];

  const budgetEstimates = [
    { value: "< 10k", label: "< 10k" },
    { value: "10k-20k", label: "10k-20k" },
    { value: "20k-40k", label: "20k-40k" },
  ];

  // Update state when project type or budget is selected
  const handleProjectTypeSelect = (type: string) =>
    setSelectedProjectType(type);
  const handleBudgetSelect = (budget: string) => setSelectedBudget(budget);

  // Function to determine button style
  const getButtonStyle = (value: string, selectedValue: string) => {
    return value === selectedValue
      ? "btn btn-form-select relative z-10 w-full overflow-hidden whitespace-nowrap border-primary px-2 py-4 bg-gradient-to-r from-primary to-third text-white"
      : "btn btn-form-select relative z-10 w-full overflow-hidden whitespace-nowrap border-primary px-2 py-4";
  };

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.mobileNumber.trim() !== "" &&
      selectedProjectType !== "" &&
      selectedBudget !== ""
    );
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    console.log("Selected Project Type:", selectedProjectType);
    console.log("Selected Budget:", selectedBudget);
    // ... submit the data or perform further actions
  };
  return (
    <section className="section relative z-10 bg-gradient-to-b from-body to-secondary">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            {/* service Type Section */}
            <div className="row border-b border-primary pb-12">
              <div className="mb-6 md:mb-0 md:col-4 lg:col-3">
                <h3 className="  md:mt-4 ">Select Service Type</h3>
              </div>
              <div className=" md:col-8 lg:col-9 ">
                <div className="row gap-y-4">
                  {serviceTypes.map((type, index) => (
                    <div key={index} className="sm:col-6 lg:col-4">
                      <button
                        value={type.value}
                        onClick={() => handleProjectTypeSelect(type.value)}
                        className={getButtonStyle(
                          type.value,
                          selectedProjectType,
                        )}
                      >
                        <span
                          data-text={type.label}
                          className="pointer-events-none after:w-full"
                        >
                          <span>{type.label}</span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimate Budget Section */}
            <div className="row border-b border-primary py-12">
              <div className="mb-6 md:mb-0 md:col-4 lg:col-3">
                <h3 className="  md:mt-4 ">Select Estimation</h3>
              </div>
              {/* ... Budget Buttons ... */}
              {budgetEstimates.map((budget, index) => (
                <div key={index} className="col">
                  <button
                    value={budget.value}
                    onClick={() => handleBudgetSelect(budget.value)}
                    className={getButtonStyle(budget.value, selectedBudget)}
                  >
                    <span
                      data-text={budget.label}
                      className="pointer-events-none after:w-full"
                    >
                      <span>{budget.label}</span>
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Info Section */}
            <div className=" row pt-12 ">
              <div className="mb-6 md:mb-0 md:col-4 lg:col-3">
                <h3 className=" has-bullet mt-2">Contact Info</h3>
              </div>
              <div className="md:col-8 lg:col-9">
                <form onSubmit={handleSubmit} className="row pt-1">
                  {/* Full Name Field */}
                  <div className="relative mb-10 md:col-6">
                    <input
                      className="form-input w-full"
                      type="text"
                      id="full_name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-label left-3" htmlFor="full_name">
                      Full Name *
                    </label>
                  </div>

                  {/* mobile Field */}
                  <div className="relative mb-10 md:col-6">
                    <input
                      className="form-input w-full"
                      type="tel"
                      id="mobile"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-label left-3" htmlFor="mobile">
                      Mobile *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-right">
                    <button
                      className="bg-gradient-to-r from-primary to-third border rounded-[70px] py-3 px-8 btn btn-primary"
                      type="submit"
                      disabled={!isFormValid()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
