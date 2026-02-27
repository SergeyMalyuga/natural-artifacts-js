export class TemplateService {
  private static instance: TemplateService | null = null;
  private templateCache: Document | null = null;

  private constructor(
    private readonly templatePath: string = 'templates.html',
  ) {
    this.templatePath = templatePath;
  }

  public static getInstance(): TemplateService {
    if (!TemplateService.instance) {
      TemplateService.instance = new TemplateService();
    }
    return TemplateService.instance;
  }

  public async loadTemplate() {
    const response = await fetch(this.templatePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const parser = new DOMParser();
    this.templateCache = parser.parseFromString(html, 'text/html');
  }

  public async getTemplate(id: string) {
    if (!this.templateCache) {
      await this.loadTemplate();
    }
    const template = this.templateCache!.getElementById(id);
    if (!template) {
      throw new Error(
        `Template with ID "${id}" not found in ${this.templatePath}`,
      );
    }

    if (!(template instanceof HTMLTemplateElement)) {
      throw new Error(`Element with ID "${id}" is not a <template>`);
    }
    return template;
  }
}
