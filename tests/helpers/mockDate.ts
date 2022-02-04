import { DateTime, Settings } from 'luxon'

export class MockDate {
  private readonly local: DateTime

  constructor (
    private readonly year: number,
    private readonly month: number,
    private readonly day: number,
    private readonly hour: number,
    private readonly minute: number
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
