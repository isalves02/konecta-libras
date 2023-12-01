export interface HeaderProps {
  page?: 'home' | 'teacher' | 'account' | 'platform',
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
  type: 'button' | 'reset' | 'submit',
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
  value?: string,
  mask?: string,
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