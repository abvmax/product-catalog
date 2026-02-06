import { type FC, type ChangeEvent } from "react";
import "./CheckboxFilter.scss";

interface CheckboxOption {
    value: string;
    label: string;
}

interface CheckboxFilterProps {
    options: CheckboxOption[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
    title?: string;
    className?: string;
}

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
    options,
    selectedValues,
    onChange,
    className = ""
}) => {
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        if (checked) {
            onChange([...selectedValues, value]);
        } else {
            onChange(selectedValues.filter(item => item !== value));
        }
    };


    return (
        <div className={`checkbox-filter ${className}`}>

            <div className="checkbox-filter__options">
                {options.map(({ value, label }) => (
                    <label key={value} className="checkbox-filter__label">
                        <input
                            type="checkbox"
                            value={value}
                            checked={selectedValues.includes(value)}
                            onChange={handleCheckboxChange}
                            className="checkbox-filter__input"
                        />
                        <span className="checkbox-filter__custom"></span>
                        <span className="checkbox-filter__text">{label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};