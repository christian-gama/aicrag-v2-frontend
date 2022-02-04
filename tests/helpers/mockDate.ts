import { DateTime, Settings } from 'luxon'

export class MockDate {
  private readonly local: DateTime

  constructor (
    public year: number,
    public month: number,
    public day: number,
    public hour: number,
    public minute: number
  ) {
    this.local = DateTime.local(
      this.year,
      this.month,
      this.day,
      this.hour,
      this.minute
    )
  }

  mock () {
    Settings.now = () => this.local.toMillis()
  }

  reset () {
    Settings.now = () => Date.now()
  }
}
