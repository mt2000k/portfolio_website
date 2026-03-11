import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {

    try {
        const filePath = path.join(process.cwd(), 'public', 'profile.jpg');
        const fileBuffer = fs.readFileSync(filePath);
        const base64Data = fileBuffer.toString('base64');
        const imageSrc = `data:image/jpeg;base64,${base64Data}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={imageSrc}
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                        alt="Favicon"
                    />
                </div>
            ),
            {
                ...size,
            }
        );
    } catch (error) {

        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'black',
                        color: 'white',
                        borderRadius: '50%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    P
                </div>
            ),
            {
                ...size,
            }
        );
    }
}
