import { colors } from '@wasd-ui/tokens'

export function Button(props: any) {
  return (
    <button
      style={{
        backgroundColor: colors.red,
        borderColor: colors.blue,
        height: '200px',
        width: '200px',
      }}
      {...props}
    />
  )
}
