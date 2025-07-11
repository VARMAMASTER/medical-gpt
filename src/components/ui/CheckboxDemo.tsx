import * as React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

const CheckboxDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox.Root
        className="h-5 w-5 rounded border border-border bg-background hover:bg-card/50 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="text-primary">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="text-sm font-medium text-text leading-none select-none"
        htmlFor="c1"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};

export default CheckboxDemo;
