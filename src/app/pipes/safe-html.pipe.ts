import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// this pipe can allow to use inline styling in the template
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(
    private sanitized: DomSanitizer,
  ) {};

  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
