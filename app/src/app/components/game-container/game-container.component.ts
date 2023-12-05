import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit  {

  @ViewChild('gameInput') gameInput: ElementRef<HTMLInputElement>;

  paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem magnam iste eos mollitia saepe minus quae recusandae culpa dolorem ratione consequatur perferendis totam omnis quibusdam beatae eum excepturi odit assumenda!';

  words: string[] = this.paragraph.split(' ');

  cursor = 0;

  get inputValue(): string {
    return this.gameInput.nativeElement.value;
  }

  constructor() { }

  ngOnInit(): void {

  }


  onKeydown(event: KeyboardEvent) {

    if ( event.code === 'Space' ) {
      // add handling for when the cursor reaches the end of the array
      this.verifyWord(this.inputValue)
      this.gameInput.nativeElement.value = '';
      return event.preventDefault();

    }
    // highlight the letters that are correct / wrong
  }

  verifyWord(textInput: string) {
    // check if textwInput matches words[cursor], update screen accordingly
    console.log(
      'this.words[this.cursor++] === textInput =',  this.words[this.cursor] === textInput
    )
    this.cursor++;
  }
}
