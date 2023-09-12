import React, { ChangeEvent, useState } from 'react';

interface SelectProps {
    options: string[];
    value: string;
    onChange: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onChange(selectedValue);
    };

    return (
        <select value={selectedOption ? selectedOption : value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export { Select };