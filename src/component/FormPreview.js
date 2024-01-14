import React from 'react';
import CheckboxField from './Elements/Checkbox';
import Radio from './Elements/Radio';
import Dropdown from './Elements/Dropdown';

const FormPreview = ({ formElements, formData }) => {
  return (
    <div>
      {formElements.map((element) => (
        <div key={element.id}>
          <label>{element.fieldName || 'Field'}:</label>
          {element.type === 'text' && (
            <p>{formData[element.id]}</p>
          )}
          {element.type === 'checkbox' && (
            <CheckboxField
              element={element}
              formData={formData}
              handleInputChange={() => {}}
              newOptionName=""
              setNewOptionName={() => {}}
              addOption={() => {}}
              removeFormElement={() => {}}
              preview
            />
          )}
          {element.type === 'radio' && (
            <Radio
              element={element}
              formData={formData}
              handleInputChange={() => {}}
              newOptionName=""
              setNewOptionName={() => {}}
              addOption={() => {}}
              removeFormElement={() => {}}
              preview
            />
          )}
          {element.type === 'dropdown' && (
            <Dropdown
              element={element}
              formData={formData}
              handleInputChange={() => {}}
              newOptionName=""
              setNewOptionName={() => {}}
              addOption={() => {}}
              removeFormElement={() => {}}
              preview
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;