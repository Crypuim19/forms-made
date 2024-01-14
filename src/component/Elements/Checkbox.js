const CheckboxField = ({ element, formData, handleInputChange, newOptionName, setNewOptionName, addOption, removeFormElement }) => (
    <div>
        <div>
            <label>
                {element.fieldName || 'Checkbox Field'}:
            </label>
                {element.options.map((option, index) => (
                    <div key={index}>
                        <input
                            type='checkbox'
                            id={`${element.id}-${index}`}
                            checked={formData[element.id] && formData[element.id].includes(option)}
                            onChange={(e) => {
                                const selectedOptions = formData[element.id] || [];
                                if (e.target.checked) {
                                    selectedOptions.push(option);
                                } else {
                                    const indexToRemove = selectedOptions.indexOf(option);
                                    if (indexToRemove !== -1) {
                                        selectedOptions.splice(indexToRemove, 1);
                                    }
                                }
                                handleInputChange(element.id, selectedOptions);
                            }}
                            />
                        <label htmlFor={`${element.id}-${index}`}>{option}</label>
                    </div>
                ))}
            <input
                className='form-control'
                type='text'
                placeholder='Option Name'
                value={newOptionName}
                onChange={(e) => setNewOptionName(e.target.value)}
            />
            <button className='btn btn-dark mb-1 mt-1' onClick={(e) => { e.preventDefault(); addOption(element.id)}}>
                Add Option
            </button>
        </div>       
    </div>
);
export default CheckboxField;