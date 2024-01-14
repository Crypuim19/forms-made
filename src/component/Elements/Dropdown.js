const Dropdown = ({ element, formData, handleInputChange, newOptionName, setNewOptionName, addOption, removeFormElement }) => (
    <div>
        <label>
            {element.fieldName || 'Dropdown Field'}:
        </label>
        <select
            value={formData[element.id] || ''}
            onChange={(e) => handleInputChange(element.id, e.target.value)}
        >
            <option value="" disabled>Select an option</option>
            {element.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <input
            className='form-control'
            type='text'
            placeholder='Option Name'
            value={newOptionName}
            onChange={(e) => setNewOptionName(e.target.value)}
        />
        <button  className='btn btn-dark mb-1 mt-1' onClick={(e) => { e.preventDefault(); addOption(element.id)}}>
            Add Option
        </button>
    </div>
);
export default Dropdown;