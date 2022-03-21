import { LoadingContainer, BigCircle, InnerCircle, Loader } from './loading.style'

export default function Loading() {
    return (
        <LoadingContainer>
            <BigCircle>
                <InnerCircle />
                <Loader>
                    <svg viewBox="25 25 50 50">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#00e8aa" />
                                <stop offset="50%" stopColor="#00e857" /> <stop offset="100%" stopColor="#00e8ad" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" stroke="url(#gradient)" />
                    </svg>
                </Loader>
            </BigCircle>
        </LoadingContainer>
    )
}