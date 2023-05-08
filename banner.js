const templateString = /**html**/ `
<section
    class="usa-banner"
    aria-label="Official website of the United States government"
>
    <div class="usa-accordion">
        <header class="usa-banner__header">
            <div class="usa-banner__inner">
                <div class="grid-col-auto">
                    <img
                        aria-hidden="true"
                        class="usa-banner__header-flag"
                        src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.3.0/img/us_flag_small.png"
                        alt=""
                    />
                </div>
                <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                    <p class="usa-banner__header-text">
                        <template data-name="header-text" data-locale="en">
                            An official website of the United States government
                        </template>
                        <template data-name="header-text" data-locale="es">
                            Un sitio oficial del Gobierno de Estados Unidos
                        </template>
                    </p>
                    <p class="usa-banner__header-action">
                        <template data-name="header-action" data-locale="en">
                            Here’s how you know
                        </template>
                        <template data-name="header-action" data-locale="es">
                            Así es como usted puede verificarlo
                        </template>
                    </p>
                </div>
                <button
                    type="button"
                    class="usa-accordion__button usa-banner__button"
                    aria-expanded="false"
                    aria-controls="gov-banner-default-default"
                >
                    <span class="usa-banner__button-text">
                        <template data-name="button-text" data-locale="en">
                            Here’s how you know
                        </template>
                        <template data-name="button-text" data-locale="es">
                            Así es como usted puede verificarlo
                        </template>
                    </span>
                </button>
            </div>
        </header>
        <div
            class="usa-banner__content usa-accordion__content"
            id="gov-banner-default-default"
            hidden=""
        >
            <div class="grid-row grid-gap-lg">
                <div class="usa-banner__guidance tablet:grid-col-6">
                    <img
                        class="usa-banner__icon usa-media-block__img"
                        src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.3.0/img/icon-dot-gov.svg"
                        role="img"
                        alt=""
                        aria-hidden="true"
                    />
                    <div class="usa-media-block__body">
                        <p>
                            <template data-name="guidance-body" data-locale="en" data-tld="gov">
                                <strong>Official websites use .gov</strong><br />A
                                <strong>.gov</strong> website belongs to an official government
                                organization in the United States.
                            </template>
                            <template data-name="guidance-body" data-locale="es" data-tld="gov">
                                <strong>Los sitios web oficiales usan .gov</strong><br />Un sitio
                                web <strong>.gov</strong> pertenece a una organización oficial del
                                Gobierno de Estados Unidos.
                            </template>
                            <template data-name="guidance-body" data-locale="en" data-tld="mil">
                                <strong>Official websites use .mil</strong><br />A
                                <strong>.mil</strong> website belongs to an official U.S.
                                Department of Defense organization.
                            </template>
                            <template data-name="guidance-body" data-locale="es" data-tld="mil">
                                <strong>Los sitios web oficiales usan .mil</strong><br />Un sitio
                                web <strong>.mil</strong> pertenece a una organización oficial del
                                Departamento de Defensa de EE. UU.
                            </template>
                        </p>
                    </div>
                </div>
                <div class="usa-banner__guidance tablet:grid-col-6">
                    <img
                        class="usa-banner__icon usa-media-block__img"
                        src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.3.0/img/icon-https.svg"
                        role="img"
                        alt=""
                        aria-hidden="true"
                    />
                    <div class="usa-media-block__body">
                        <p>
                            <template data-name="guidance-icon-body" data-locale="es" data-tld="gov">
                                <strong>Los sitios web seguros .gov usan HTTPS</strong><br />Un
                                <strong>candado</strong> (
                            </template>
                            <template data-name="guidance-icon-body" data-locale="es" data-tld="mil">
                                <strong>Los sitios web seguros .mil usan HTTPS</strong><br />Un
                                <strong>candado</strong> (
                            </template>
                            <template data-name="guidance-icon-body" data-locale="en" data-tld="gov">
                                <strong>Secure .gov websites use HTTPS</strong><br />A
                                <strong>lock</strong> (
                            </template>
                            <template data-name="guidance-icon-body" data-locale="en" data-tld="mil">
                                <strong>Secure .mil websites use HTTPS</strong><br />A
                                <strong>lock</strong> (
                            </template>
                            <span class="icon-lock"
                            ><svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="52"
                                 height="64"
                                 viewBox="0 0 52 64"
                                 class="usa-banner__lock-image"
                                 role="img"
                                 aria-labelledby="banner-lock-description-default"
                                 focusable="false"
                             >
                                <title id="banner-lock-title-default">Lock</title>
                                <desc id="banner-lock-description-default">Locked padlock icon</desc>
                                <path
                                    fill="#000000"
                                    fill-rule="evenodd"
                                    d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                                />
                            </svg> </span
                                   >
                            <template data-name="guidance-icon-body" data-locale="es" data-tld="gov">) o <strong>https://</strong> significa que usted se conectó de
                                forma segura a un sitio web .gov. Comparta información sensible
                                sólo en sitios web oficiales y seguros.
                            </template>
                            <template data-name="guidance-icon-body" data-locale="es" data-tld="mil">) o <strong>https://</strong> significa que usted se conectó de
                                forma segura a un sitio web .mil. Comparta información sensible
                                sólo en sitios web oficiales y seguros.
                            </template>
                            <template data-name="guidance-icon-body" data-locale="en" data-tld="gov">
                                ) or <strong>https://</strong> means you’ve safely connected to
                                the .gov website. Share sensitive information only on official,
                                secure websites.
                            </template>
                            <template data-name="guidance-icon-body" data-locale="en" data-tld="mil">
                                ) or <strong>https://</strong> means you’ve safely connected to
                                the .mil website. Share sensitive information only on official,
                                secure websites.
                            </template>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class BannerComponent extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = templateString;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "tld" || name === "locale") {
      this.render();
    }
  }

  render() {
    const locale = this.getAttribute("locale");
    const tld = this.getAttribute("tld");
    const content = this.template.content.cloneNode(true);
    this.innerHTML = "";
    this.append(content);
    const tldAndLocaleTemplates = Array.from(
      this.querySelectorAll(
        `template[data-locale="${locale}"][data-tld="${tld}"]`
      )
    );
    tldAndLocaleTemplates.forEach((template) => {
      template.outerHTML = template.innerHTML;
    });
    const invalidTldAndLocaleTemplates = Array.from(
      this.querySelectorAll(`template[data-locale][data-tld]`)
    );
    invalidTldAndLocaleTemplates.forEach((template) => template.remove());
    const tldTemplates = Array.from(
      this.querySelectorAll(`template[data-tld="${tld}"]`)
    );
    tldTemplates.forEach((tldTemplate) => {
      tldTemplate.outerHTML = tldTemplate.innerHTML;
    });
    const localeTemplates = Array.from(
      this.querySelectorAll(`template[data-locale="${locale}"]`)
    );
    localeTemplates.forEach((localeTemplate) => {
      localeTemplate.outerHTML = localeTemplate.innerHTML;
    });
    Array.from(this.querySelectorAll("template")).forEach((template) =>
      template.remove()
    );
  }

  static get observedAttributes() {
    return ["locale", "tld"];
  }
}

window.customElements.define("usa-banner", BannerComponent);
