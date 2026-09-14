import { ImageResponse } from "next/og";

export const alt = "MD Harun — AI Prompt & Workflow Specialist portfolio";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background:
                    "linear-gradient(135deg, #0f172a 0%, #111827 48%, #173b72 100%)",
                padding: "64px 72px",
                color: "white",
                fontFamily: "Arial, Helvetica, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 22,
                }}
            >
                <div
                    style={{
                        width: 88,
                        height: 88,
                        borderRadius: 23,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #2563eb, #22d3ee)",
                        fontSize: 36,
                        fontWeight: 900,
                    }}
                >
                    MH
                </div>

                <div
                    style={{
                        fontSize: 40,
                        fontWeight: 900,
                    }}
                >
                    MD HARUN
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 940,
                }}
            >
                <div
                    style={{
                        fontSize: 68,
                        lineHeight: 1.04,
                        letterSpacing: "-3px",
                        fontWeight: 800,
                    }}
                >
                    AI Prompt & Workflow Specialist
                </div>

                <div
                    style={{
                        marginTop: 25,
                        fontSize: 27,
                        color: "rgba(255,255,255,0.68)",
                    }}
                >
                    Tested AI workflows, prompt architecture, evaluation and
                    quality assurance.
                </div>
            </div>

            <div
                style={{
                    fontSize: 22,
                    color: "rgba(255,255,255,0.6)",
                }}
            >
                mdharun.com
            </div>
        </div>,
        {
            ...size,
        },
    );
}
