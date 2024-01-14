const Radio = ({ element, formData, handleInputChange, newOptionName, setNewOptionName, addOption, removeFormElement }) => (
    <div>
        <label>
            {element.fieldName || 'Radio Field'}:
        </label>
        {element.options.map((option, index) => (
            <div key={index}>
                <input
                    type='radio'
                    id={`${element.id}-${index}`}
                    checked={formData[element.id] === option}
                    onChange={() => handleInputChange(element.id, option)}
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
);
export default Radio;