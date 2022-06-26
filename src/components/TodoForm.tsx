import React, { FormEvent, useRef, useEffect } from 'react';

interface TodoFormProps {
  emptyList: boolean,
  addItem(text: string): void,
}

export default ({ emptyList, addItem }: TodoFormProps) => {
  const inputText = useRef<HTMLInputElement>(null);

  const focusInputText = () => inputText?.current?.focus();

  useEffect(() => {
    if (emptyList) focusInputText();
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (inputText && inputText.current && inputText.current.value !== '') {
      addItem(inputText.current.value);
      inputText.current.value = '';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={inputText} placeholder="Hello elisha, Input a task to be done." />
      <button type="submit">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};
