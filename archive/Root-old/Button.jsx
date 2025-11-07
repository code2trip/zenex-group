'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground hover:bg-primary-dark focus:ring-primary-background',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-background',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-background',
        accent: 'bg-accent-color text-accent-foreground hover:bg-accent-dark focus:ring-accent-color',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const Button = ({
  // Required parameters with defaults (converted to valid Tailwind)
  text = "",
  text_font_size = "text-base",
  text_font_family = "Inter",
  text_font_weight = "font-bold",
  text_line_height = "leading-snug",
  text_text_align = "left",
  text_text_transform = "uppercase",
  text_color = "text-primary-foreground",
  fill_background_color = "bg-primary-background",
  border_border_radius = "rounded-md",

  // Optional parameters (no defaults)
  border_border,
  effect_box_shadow,
  text_background,
  fill_background,
  border_border_image,
  layout_align_self,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== ''
  const hasValidShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== ''
  const hasValidTextBg = text_background && typeof text_background === 'string' && text_background?.trim() !== ''
  const hasValidFillBg = fill_background && typeof fill_background === 'string' && fill_background?.trim() !== ''
  const hasValidBorderImage = border_border_image && typeof border_border_image === 'string' && border_border_image?.trim() !== ''
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== ''
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidTextBg ? `bg-[${text_background}]` : '',
    hasValidFillBg ? `bg-[${fill_background}]` : '',
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
    ...(hasValidBorderImage && { borderImage: border_border_image }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_text_transform === 'uppercase' ? 'uppercase' : text_text_transform === 'lowercase' ? 'lowercase' : text_text_transform === 'capitalize' ? 'capitalize' : '',
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault()
      return
    }

    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button
