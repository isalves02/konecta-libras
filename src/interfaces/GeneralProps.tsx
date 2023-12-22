export interface HeaderProps {
  page: 'home' | 'teacher' | 'account' | 'platform',
} 

export interface TextProps {
  text: string,
  classes?: string,
  type?: 'paragraph' | 'paragraph-max' | 'topic' | 'detail' | 'h4' | 'h5',
}

export interface ThumbnailProps {
  title?: string,
  imageUrl: string,
  videoUrl?: string,
  classes?: string,
  category?: string,
}

export interface VideoProps {
  url?: string,
  title?: string,
}

export interface ButtonProps {
  text: string,
  value?: string,
  classes?: string,
  isDisabled?: boolean,
  clickEvent?: () => void,
  type: 'button' | 'submit',
}

export interface LabelProps {
  name: string,
  text: string,
  classes?: string,
  sreader?: boolean,
}

export interface InputProps {
  id: string,
  type: string,
  name: string,
  mask?: string,
  accept?: string,
  value?: string,
  classes?: string,
  placeholder?: string,

  maxLength?: number,

  hasEvent?: boolean,
  required?: boolean,
  isChecked?: boolean,
  isDisabled?: boolean,
  autoComplete?: boolean,
  inputHasMask?: boolean,
}

export interface OptionsProps {
  value: string, 
}

export interface SelectProps {
  id: string,
  name: string,
  
  required?: boolean,
  options: OptionsProps[],
}

export interface TextareaProps {
  id: string,
  name: string,
  placeholder: string,
  required?: boolean,
}

export interface CardProps {
  text: string;
  classes?: string;
  hasHover?: boolean;
  hasIcon?: boolean;
}

export interface TagProps {
  text: string;
  type: string;
}