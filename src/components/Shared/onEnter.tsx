export const onEnter = (fn: () => void) => (e: React.KeyboardEvent<HTMLLabelElement>) => e.key === "Enter" ? fn() : null
