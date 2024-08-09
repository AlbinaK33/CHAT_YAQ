import React, { useState } from "react";
import "./field-timezone.scss"
import moment from "moment-timezone";


interface TimezoneProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder: string;
}

const FieldTimezone: React.FC<TimezoneProps> = ({
    onChange,
    label,
    placeholder,
    value,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
            setIsFocused(false);        
    };


    const timezones = moment.tz.names().map((tz) => {
        const offset = moment.tz(tz).format("z");
        return {
            value: tz,
            label: `${tz} (GMT${offset})`,
        };
    });


    const handleChange = (selectedOption: any) => {
        if (selectedOption) {
            onChange(selectedOption.value);
        } else {
            onChange("")
        }
    }

   

    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
          <select
            className="field__input"
            name="timezone"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >

      <option value="" disabled>
        {placeholder}
      </option>

      {timezones.map((tz) => (
        <option key={tz.value} value={tz.value}>
          {tz.label}
        </option>
      ))}
    </select>
        </div>
        
        </div>
    )
}

export default FieldTimezone;