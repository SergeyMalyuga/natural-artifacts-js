import { TemplateService } from '../services/template-service.ts';
import { Artefact } from '../types/artefact.ts';

export class ArtefactListRenderer {
  private templateService = TemplateService.getInstance();

  constructor(private container: HTMLElement) {
    this.container = container;
  }

  async renderTemplate(artefacts: Artefact[]) {
    const template = await this.templateService.getTemplate(
      'artefact-card-template',
    );
    for (const artefact of artefacts) {
      const clone = template.content.cloneNode(true) as DocumentFragment;
      const image = clone.querySelector('img');
      const title = clone.querySelector('.artefacts__title-card');
      const description = clone.querySelector('.artefacts__text-card');
      if (image) {
        image.src = artefact.image.url;
      }
      if (title) {
        title.textContent = artefact.title;
      }
      if (description) {
        description.textContent = artefact.description;
      }
      this.container.appendChild(clone);
    }
  }
}
