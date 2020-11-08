import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'zen-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  defaultAvatarURL = 'assets/avatar.jpg';
  @Input() imageUrl: string;
  @Input() size: number = 180;

  getContainerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
    };
  }

  getImageStyle(imgRef: ElementRef): any | void {
    const imgInfo = this.getImageInfo(imgRef);

    // Só retorna o estilo se existir informações sobre a imagem
    if (imgInfo) {
      // Variável já instanciada esperando uma imagem no formato landscape, por questões de performance
      const height = (imgInfo.height * this.size) / imgInfo.width;
      const width = (imgInfo.width * this.size) / imgInfo.height;
      const size = {
        height: `${this.size}px`,
        width: 'auto',
        'margin-left': `-${(width - this.size) / 2}px`,
        'margin-top': 'initial',
      };

      if (imgInfo.aspect === 'portrait') {
        size.height = 'auto';
        size.width = `${this.size}px`;
        size['margin-top'] = `-${(height - this.size) / 2}px`;
        size['margin-left'] = `initial`;
      }

      return { ...size };
    }
  }

  getImageInfo(
    imgRef: ElementRef
  ): {
    aspect: 'landscape' | 'portrait';
    height: number;
    width: number;
  } | void {
    // Retorna as informações originais da imagem
    const img: any = imgRef.nativeElement || imgRef;
    const height = img.naturalHeight;
    const width = img.naturalWidth;

    // Só retorna o resultado se existir as informações de altura e largura.
    if (height && width) {
      const result = { height, width, aspect: '' };

      return height < width
        ? { ...result, aspect: 'landscape' }
        : { ...result, aspect: 'portrait' };
    }
  }
}
