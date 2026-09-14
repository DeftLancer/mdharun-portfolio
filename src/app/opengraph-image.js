import { ImageResponse } from "next/og";

export const alt = "MD Harun — AI Prompt & Workflow Specialist portfolio";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative glow */}
            <div
                style={{
                    position: "absolute",
                    width: 520,
                    height: 520,
                    borderRadius: "50%",
                    right: -150,
                    top: -180,
                    background:
                        "radial-gradient(circle, rgba(34,211,238,0.28), rgba(37,99,235,0.08) 45%, transparent 70%)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        width: 92,
                        height: 92,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 24,
                        background:
                            "linear-gradient(135deg, #2563eb 0%, #22d3ee 100%)",
                        fontSize: 38,
                        fontWeight: 900,
                        letterSpacing: "-3px",
                    }}
                >
                    MH
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontSize: 38,
                            fontWeight: 900,
                            letterSpacing: "-1px",
                        }}
                    >
                        MD HARUN
                    </div>

                    <div
                        style={{
                            marginTop: 6,
                            fontSize: 20,
                            color: "rgba(255,255,255,0.66)",
                        }}
                    >
                        Mohammad Harun Or Rashid
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    maxWidth: 940,
                }}
            >
                <div
                    style={{
                        fontSize: 66,
                        lineHeight: 1.05,
                        fontWeight: 800,
                        letterSpacing: "-3px",
                    }}
                >
                    AI Prompt & Workflow Specialist
                </div>

                <div
                    style={{
                        marginTop: 26,
                        fontSize: 27,
                        lineHeight: 1.45,
                        color: "rgba(255,255,255,0.67)",
                    }}
                >
                    Prompt Architecture · LLM Evaluation · Educational Content ·
                    Assessment Design · AI QA
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    fontSize: 20,
                    color: "rgba(255,255,255,0.6)",
                }}
            >
                <span>mdharun.com</span>

                <span
                    style={{
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                    }}
                >
                    Design · Test · Evaluate · Refine
                </span>
            </div>
        </div>,
        {
            ...size,
        },
    );
}
