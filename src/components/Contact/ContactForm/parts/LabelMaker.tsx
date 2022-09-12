import React from 'react';

export const LabelMaker = () => {
  return <div>LabelMaker</div>;
};

/* export const showLabel = (htmlFor: string, labelText: string) => {
  if (labelText === 'Message:') {
    return (
      <label htmlFor={htmlFor} className='form-label'>
        {labelText}
        <span className='error-label'>{errors.message?.message}</span>
      </label>
    );
  }
  if (labelText === 'E-mail:') {
    return (
      <label htmlFor={htmlFor} className='form-label'>
        {labelText}
        <span className='error-label'>{errors.email?.message}</span>
      </label>
    );
  }
  if (labelText === 'Name:') {
    return (
      <label htmlFor={htmlFor} className='form-label'>
        {labelText}
        <span className='error-label'>{errors.name?.message}</span>
      </label>
    );
  }
}; */
