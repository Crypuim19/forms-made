import React, { useState } from 'react';
import CheckboxField from './Elements/Checkbox';
import Radio from './Elements/Radio';
import Dropdown from './Elements/Dropdown';
export default function FormElement() {
    const [formElements, setFormElements] = useState([]);
    const [formData, setFormData] = useState({});
    const [fieldName, setFieldName] = useState('');
    const [newOptionName, setNewOptionName] = useState('');
   

    const addFormElement = (type) => {
        const newFormElement = {
            id: new Date().getTime(),
            type,
            fieldName,
            options: [],
        };

        setFormElements([...formElements, newFormElement]);
        setFormData({ ...formData, [newFormElement.id]: '' });
        setFieldName('');
    };

    const handleInputChange = (id, value) => {
        setFormData({ ...formData, [id]: value });
    };

    const addOption = (elementId) => {
        if (newOptionName.trim() === '') {
            return;
        }

        const updatedFormElements = formElements.map((element) => {
            if (element.id === elementId) {
                return {
                    ...element,
                    options: [...element.options, newOptionName],
                };
            }
            return element;
        });

        setFormElements(updatedFormElements);
        setNewOptionName('');
    };

    const removeFormElement = (id) => {
        const updatedFormElements = formElements.filter((element) => element.id !== id);
        setFormElements(updatedFormElements);
        const { [id]: removed, ...updatedFormData } = formData;
        setFormData(updatedFormData);
    };

    const clearAll = () => {
        setFormElements([]);
        setFormData([]);
        setFieldName('');
        setNewOptionName('');
    }

   


    return (
        <div id='form-container' className='form-container bg-secondary-subtle'>
            <div className='leftSide'>
                <div className='leftSide-title'>
                    <h4>Add your form elements : <br/> How to use : write the name of the field and then chose what type you want to add </h4>
                    <div>
                        <label>
                            Field Name:
                            <input 
                                className='form-control'
                                placeholder='Enter name before choosing an element'
                                type='text'
                                value={fieldName}
                                onChange={({ target: { value } }) => setFieldName(value)}
                                />
                        </label>
                        <div className='row btn'>
                            <button className='btn btn-dark mb-1' onClick={() => addFormElement('text')}>Text</button>
                            <button className='btn btn-dark mb-1' onClick={() => addFormElement('checkbox')}>Checkbox</button>
                            <button className='btn btn-dark mb-1' onClick={() => addFormElement('radio')}>Radio</button>
                            <button className='btn btn-dark mb-1' onClick={() => addFormElement('dropdown')}>Dropdown</button>
                            <button className='btn btn-dark mb-1' onClick={() => addFormElement('date')}>Date</button>
                            <button className='btn btn-danger mb-1 ml-1' onClick={clearAll}>Clear All</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='rightSide' id='user-form-elements-container'>
                <form>

                    {/*----------------text--------------*/}
                    {formElements.map((element) => (
                        <div key={element.id}>
                            {element.type === 'text' && (
                                <label>
                                    {element.fieldName || 'Field'}:
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={formData[element.id] || ''}
                                        onChange={(e) => handleInputChange(element.id, e.target.value)}
                                    />
                                </label>
                            )}

                    {/*----------------checkbox--------------*/}

                    {element.type === 'checkbox' && (
                        <CheckboxField
                            element={element}
                            formData={formData}
                            handleInputChange={handleInputChange}
                            newOptionName={newOptionName}
                            setNewOptionName={setNewOptionName}
                            addOption={addOption}
                            removeFormElement={removeFormElement}
                        />
                    )}

                            {/*----------------radio--------------*/}


                            {element.type === 'radio' && (
                                <Radio
                                    element={element}
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                    newOptionName={newOptionName}
                                    setNewOptionName={setNewOptionName}
                                    addOption={addOption}
                                    removeFormElement={removeFormElement}
                                />
                            )}

                            {/*----------------dropdown--------------*/}

                            {element.type === 'dropdown' && (
                                <Dropdown
                                    element={element}
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                    newOptionName={newOptionName}
                                    setNewOptionName={setNewOptionName}
                                    addOption={addOption}
                                    removeFormElement={removeFormElement}
                                />
                            )}

                            {/*----------------date--------------*/}

                            {element.type === 'date' && (
                                <div>
                                    <label>
                                        {element.fieldName || 'Date Picker Field'}:
                                    </label>
                                    <input
                                        type='date'
                                        value={formData[element.id] || ''}
                                        onChange={(e) => handleInputChange(element.id, e.target.value)}
                                    />
                                </div>
                            )}

                            <button
                                 className='btn btn-dark'
                                onClick={() => removeFormElement(element.id)}>Remove</button>
                        </div>
                    ))}
                </form>
               
            </div>

        </div>
    );
}