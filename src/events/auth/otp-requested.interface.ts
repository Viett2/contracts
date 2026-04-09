export interface OtpRequestedEvent {
    identifier: string
    type: 'phone' | 'email'
    code: string
}