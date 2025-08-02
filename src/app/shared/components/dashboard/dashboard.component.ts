import { Component, OnInit, AfterViewInit, Renderer2, OnDestroy, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



 @ViewChild('image', { static: true }) imageRef!: ElementRef;
  @ViewChild('lens', { static: true }) lensRef!: ElementRef;
  @ViewChild('result', { static: true }) resultRef!: ElementRef;

  imageSrc = 'https://i.pinimg.com/736x/2f/b3/6e/2fb36ec606e18fa38e05485f92f781eb.jpg'; // 🖼️ Replace with your image path
  cx = 0;
  cy = 0;

  onMouseEnter() {
    this.lensRef.nativeElement.style.display = 'block';
    this.resultRef.nativeElement.style.display = 'block';
  }

  onMouseLeave() {
    this.lensRef.nativeElement.style.display = 'none';
    this.resultRef.nativeElement.style.display = 'none';
  }

  onMouseMove(e: MouseEvent) {
    const img = this.imageRef.nativeElement;
    const lens = this.lensRef.nativeElement;
    const result = this.resultRef.nativeElement;

    const pos = this.getCursorPos(e, img);
    let x = pos.x - lens.offsetWidth / 2;
    let y = pos.y - lens.offsetHeight / 2;

    if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
    if (x < 0) x = 0;
    if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
    if (y < 0) y = 0;

    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    result.style.backgroundPosition = `-${x * this.cx}px -${y * this.cy}px`;
  }

  ngAfterViewInit() {
    const img = this.imageRef.nativeElement;
    const lens = this.lensRef.nativeElement;
    const result = this.resultRef.nativeElement;

    this.cx = result.offsetWidth / lens.offsetWidth;
    this.cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url('${this.imageSrc}')`;
    result.style.backgroundSize = `${img.width * this.cx}px ${img.height * this.cy}px`;
  }

  private getCursorPos(e: MouseEvent, img: HTMLElement) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  }


}


