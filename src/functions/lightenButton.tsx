export const lightenButton = (e: React.MouseEvent, color: string): void => {
    const target = e.target as HTMLButtonElement;
    if (target) target.style.backgroundColor = color
}