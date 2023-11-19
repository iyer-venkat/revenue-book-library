export const isInteractiveFormFieldElement = (element: HTMLElement) => {
  const formTags = ['INPUT', 'SELECT', 'TEXTAREA'];
  return (
    formTags.includes(element.tagName) && !element.hasAttribute('disabled')
  );
};

export const scrollFocusOnError = (id: string) => {
  const errorElement = document.getElementById(id);
  if (!errorElement) {
    return;
  }

  errorElement.scrollIntoView({ behavior: 'smooth' });

  if (isInteractiveFormFieldElement(errorElement)) {
    errorElement.focus({ preventScroll: true });
    return;
  }
  const interactiveElem = errorElement.querySelector(
    'input, select, textarea',
  ) as HTMLElement | HTMLSelectElement | HTMLTextAreaElement;

  if (!interactiveElem) {
    return;
  }

  interactiveElem.focus({ preventScroll: true });
};
