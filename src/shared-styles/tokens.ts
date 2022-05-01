import { css } from 'lit';

export default css`
  :host {
    --ks-border-color: rgb(var(--ks-color-light-base));
    --ks-border-radius: 0.25rem;
    --ks-disabled-color: rgb(var(--ks-color-light-dark));
    --ks-error-color: rgb(var(--ks-color-danger-base));
    --ks-outline: var(--ks-default-outline);
    --ks-outline-offset: 0.125rem;
    --ks-primary-color: rgb(var(--ks-color-primary-base));

    /* OUTLINE */
    --ks-default-outline: dashed 0.0625rem rgba(var(--ks-color-dark-base), 1);
    --ks-default-outline-offset: var(--ks-spacing-size-xxs);

    /* COLORS */
    --ks-color-primary-base: 44, 83, 116;
    --ks-color-primary-base-text: 255, 255, 255;
    --ks-color-primary-light: 55, 104, 146;
    --ks-color-primary-light-text: 255, 255, 255;
    --ks-color-primary-lighter: 66, 125, 175;
    --ks-color-primary-lighter-text: 0, 0, 0;
    --ks-color-primary-dark: 33, 62, 86;
    --ks-color-primary-dark-text: 255, 255, 255;
    --ks-color-primary-darker: 22, 41, 57;
    --ks-color-primary-darker-text: 255, 255, 255;
    --ks-color-secondary-base: 172, 63, 0;
    --ks-color-secondary-base-text: 255, 255, 255;
    --ks-color-secondary-light: 213, 78, 0;
    --ks-color-secondary-light-text: 0, 0, 0;
    --ks-color-secondary-lighter: 254, 93, 0;
    --ks-color-secondary-lighter-text: 0, 0, 0;
    --ks-color-secondary-dark: 131, 48, 0;
    --ks-color-secondary-dark-text: 255, 255, 255;
    --ks-color-secondary-darker: 90, 33, 0;
    --ks-color-secondary-darker-text: 255, 255, 255;
    --ks-color-success-base: 79, 130, 26;
    --ks-color-success-base-text: 255, 255, 255;
    --ks-color-success-light: 100, 164, 33;
    --ks-color-success-light-text: 0, 0, 0;
    --ks-color-success-lighter: 120, 198, 40;
    --ks-color-success-lighter-text: 0, 0, 0;
    --ks-color-success-dark: 58, 96, 19;
    --ks-color-success-dark-text: 255, 255, 255;
    --ks-color-success-darker: 38, 62, 12;
    --ks-color-success-darker-text: 255, 255, 255;
    --ks-color-info-base: 80, 155, 206;
    --ks-color-info-base-text: 0, 0, 0;
    --ks-color-info-light: 112, 173, 215;
    --ks-color-info-light-text: 0, 0, 0;
    --ks-color-info-lighter: 144, 191, 224;
    --ks-color-info-lighter-text: 0, 0, 0;
    --ks-color-info-dark: 54, 136, 192;
    --ks-color-info-dark-text: 0, 0, 0;
    --ks-color-info-darker: 45, 113, 160;
    --ks-color-info-darker-text: 255, 255, 255;
    --ks-color-warning-base: 225, 169, 0;
    --ks-color-warning-base-text: 0, 0, 0;
    --ks-color-warning-light: 255, 194, 11;
    --ks-color-warning-light-text: 0, 0, 0;
    --ks-color-warning-lighter: 255, 204, 52;
    --ks-color-warning-lighter-text: 0, 0, 0;
    --ks-color-warning-dark: 184, 138, 0;
    --ks-color-warning-dark-text: 0, 0, 0;
    --ks-color-warning-darker: 143, 108, 0;
    --ks-color-warning-darker-text: 255, 255, 255;
    --ks-color-danger-base: 179, 46, 46;
    --ks-color-danger-base-text: 255, 255, 255;
    --ks-color-danger-light: 205, 61, 61;
    --ks-color-danger-light-text: 255, 255, 255;
    --ks-color-danger-lighter: 213, 93, 93;
    --ks-color-danger-lighter-text: 0, 0, 0;
    --ks-color-danger-dark: 147, 38, 38;
    --ks-color-danger-dark-text: 255, 255, 255;
    --ks-color-danger-darker: 114, 29, 29;
    --ks-color-danger-darker-text: 255, 255, 255;
    --ks-color-light-base: 197, 209, 218;
    --ks-color-light-base-text: 0, 0, 0;
    --ks-color-light-light: 222, 229, 234;
    --ks-color-light-light-text: 0, 0, 0;
    --ks-color-light-lighter: 247, 248, 250;
    --ks-color-light-lighter-text: 0, 0, 0;
    --ks-color-light-dark: 172, 189, 202;
    --ks-color-light-dark-text: 0, 0, 0;
    --ks-color-light-darker: 147, 169, 187;
    --ks-color-light-darker-text: 0, 0, 0;
    --ks-color-dark-base: 55, 68, 79;
    --ks-color-dark-base-text: 255, 255, 255;
    --ks-color-dark-light: 72, 89, 103;
    --ks-color-dark-light-text: 255, 255, 255;
    --ks-color-dark-lighter: 89, 109, 127;
    --ks-color-dark-lighter-text: 255, 255, 255;
    --ks-color-dark-dark: 39, 47, 55;
    --ks-color-dark-dark-text: 255, 255, 255;
    --ks-color-dark-darker: 22, 27, 31;
    --ks-color-dark-darker-text: 255, 255, 255;
  }
`;