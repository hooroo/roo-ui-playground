import { qantas } from '@roo-ui/themes'

const textStyles = {
  ...qantas.textStyles,
  disabledLabel: {
    ...qantas.textStyles.label,
    opacity: 0.3,
  }
}

export default {
  ...qantas,
  textStyles,
}
