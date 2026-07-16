import { computed, Service, signal } from '@angular/core';

export type Message = {
  text: string;
  type: string;
};

@Service()
export class MessageService {
  messages = signal<Message[]>([]);
  count = computed(() => this.messages().length);

  getMessages(): Message[] {
    return this.messages();
  }

  addMessage(message: Message): void {
    // [1, 2, 3]
    // => [...[1, 2, 3], 4] => [1, 2, 3, 4]

    this.messages.update(messages => [...messages, message]);
    // this.messages.update(messages => {
    //   messages.push(message);
    //   return messages;
    // });
  }

  removeMessage(index: number): void {
    // [1, 2, 3]
    // => [1, 2, 2, 3] => Garde tout sauf index 1 => [1, 2, 3]
    this.messages.update(messages => messages.filter((_, i) => i !== index));
    // this.messages.update(messages => {
    //   messages.splice(index, 1);
    //   return messages;
    // });
  }
}
