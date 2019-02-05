import { Component, OnInit } from '@angular/core';
import { Mezzanine } from './interfaces/mezzanine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public Mezzanines: Mezzanine[];
  title = 'two-way-binding-demo';

  ngOnInit() {
    this.Mezzanines = [{ title: 'Terminator 1', streamingPolicy: 'StreamingPolicy_Clear', status: 'unprocessed' },
    { title: 'Toy Story', streamingPolicy: 'StreamingPolicy_Encrypted', status: 'processed' },
    { title: 'Gladiator', streamingPolicy: 'StreamingPolicy_Clear', status: 'approved' }];
  }

  public OnEncode(mezzanine: Mezzanine): void {
    var m = mezzanine;
  }

  public onEncryptionChanged(e, mezzanine: Mezzanine) {
    if(e.target.checked) {
      mezzanine.streamingPolicy = 'StreamingPolicy_Encrypted';
    } else {
      mezzanine.streamingPolicy = 'StreamingPolicy_Clear';
    }
  }
}