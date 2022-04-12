import { translate } from 'react-jhipster';

const typeTemplate = "'${label}' is not a valid ${type}";

export const loadMessage = () => {
  return {
    default: "Validation error on field '${name}'",
    required: translate('entity.validation.required', { label: '${label}' }),
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: translate('entity.validation.email'),
      url: typeTemplate,
      hex: typeTemplate,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: translate('entity.validation.minlength', { min: '${min}', label: '${label}' }),
      max: translate('entity.validation.maxlength', { max: '${max}', label: '${label}' }),
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: translate('entity.validation.min', { min: '${min}', label: '${label}' }),
      max: translate('entity.validation.max', { max: '${max}', label: '${label}' }),
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: {
      mismatch: translate('entity.validation.pattern', { label: '${label}' }),
    },
  };
};
