import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent  {

  @ViewChild('gameInput') gameInput: ElementRef<HTMLInputElement>;

  paragraph = 'Lorem ipsum dolor sit amet consectetur';
  words: string[] = this.paragraph.split(' ');
  cursor = 0;
  points = 0;

  get inputValue(): string {
    return this.gameInput.nativeElement.value;
  }

  onKeydown(event: KeyboardEvent) {

    if ( event.code === 'Space' ) {
      // add handling for when the cursor reaches the end of the array
      if (this.cursor < this.words.length - 1 ) {
        this.verifyWord(this.inputValue);
        this.gameInput.nativeElement.value = '';
      } else {
        alert(`You scored ${this.points} / ${this.words.length}`);
      }

      return event.preventDefault();
    }
    // highlight the letters that are correct / wrong
  }

  verifyWord(textInput: string) {
    // check if textwInput matches words[cursor], update screen accordingly
    if (this.words[this.cursor] === textInput) {
      this.points++;
    }

    this.cursor++;
  }
}
