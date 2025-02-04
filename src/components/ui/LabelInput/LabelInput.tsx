import { ReactNode, InputHTMLAttributes } from "react";
import { SLableText } from "./LabelInput.style";

interface ILabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  inputIcon?: ReactNode;
  isInput?: boolean;
  areaPlaceholder?: string;
  errorText?: string;
  isError: boolean;
}

export const LabelInput = ({
  labelText,
  inputIcon,
  isInput = true,
  areaPlaceholder,
  errorText,
  isError,
  ...props
}: ILabelInputProps) => {
  return (
    <SLableText>
      {labelText}
      {inputIcon ? (
        <div>
          {isInput ? (
            <input type="text" {...props} />
          ) : (
            <textarea rows={5} placeholder={areaPlaceholder}></textarea>
          )}
        </div>
      ) : (
        <div>
          {isInput ? (
            <input type="text" {...props} />
          ) : (
            <textarea rows={10} placeholder={areaPlaceholder}></textarea>
          )}
        </div>
      )}
      {isError && <p>{errorText}</p>}
    </SLableText>
  );
};
