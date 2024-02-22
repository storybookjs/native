import React, { ChangeEvent, useEffect, useState } from "react";
import { API } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { EmulatorEvents } from "@storybook/native-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export interface MapContainerProps {
    api: API;
    active?: boolean;
}

function getType(originalType: string) {
    switch (originalType) {
        case "text/vcard":
            return "text/x-vcard";
        default:
            return originalType;
    }
}

export default ({ api, active }: MapContainerProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false); // State to track uploading status
    const [session, setSession] = useState<Session | null>(null); // State to track uploading status

    useEffect(() => {
        const currentSession = api.getChannel()?.last(EmulatorEvents.onSession);
        setSession(currentSession);

        const onSession = (session: Session) => {
            setSession(session);
        };
        api.on(EmulatorEvents.onSession, onSession);
        return () => {
            api.off(EmulatorEvents.onSession, onSession);
        };
    }, []);

    const handleUpload = async (file: File) => {
        if (file && session) {
            setUploading(true); // Set uploading status to true when starting upload

            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                `${session.path}/session/${session.token}/addMedia`,
                true
            );
            xhr.setRequestHeader("Content-Type", getType(file.type)); // Set the content type to indicate binary data
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        // Upload successful, reset state
                        setSelectedFile(null);
                        setUploading(false);
                    } else {
                        console.error(
                            "Upload failed:",
                            xhr.statusText,
                            xhr.status
                        );
                        setUploading(false);
                    }
                }
            };
            xhr.onerror = () => {
                console.error("Error uploading file");
                setUploading(false);
            };
            const reader = new FileReader();
            reader.onload = function () {
                xhr.send(reader.result);
            };

            reader.readAsArrayBuffer(file);
        } else {
            console.error("file or session not set", file, session);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            handleUpload(file);
        }
    };

    const styles = {
        container: {
            margin: "20px",
            fontFamily: "Arial, sans-serif"
        },
        fileInput: {
            display: "none"
        },
        button: {
            padding: "8px 16px",
            backgroundColor: uploading ? "#ccc" : "#65e5a6",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: uploading
                ? "not-allowed"
                : selectedFile
                ? "not-allowed"
                : "pointer"
        },
        buttonText: {
            marginRight: "8px"
        },
        loader: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        title: {
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px"
        },
        list: {
            marginLeft: "20px"
        }
    };

    return (
        <AddonPanel key="media-panel" active={Boolean(active)}>
            <div style={styles.container}>
                <div style={styles.title}>Upload media to device</div>
                <p>Allowed media type to upload</p>
                <div style={styles.list}>
                    <ul>
                        <li>Images</li>
                        <li>Videos</li>
                        <li>Gifs</li>
                        <li>vCards</li>
                    </ul>
                </div>
                <br />
                <label htmlFor="fileInput" style={styles.button}>
                    {uploading && (
                        <FontAwesomeIcon
                            size="sm"
                            icon={faSpinner}
                            className="spinner"
                        />
                    )}
                    <span
                        style={
                            selectedFile || uploading ? {} : { color: "#fff" }
                        }
                    >
                        {uploading ? "" : "Choose File"}
                    </span>
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png, .gif, .vcf"
                        maxLength={1048576 * 50}
                        id="fileInput"
                        onChange={handleFileChange}
                        style={styles.fileInput}
                    />
                    <span style={styles.buttonText}>
                        {uploading
                            ? "Uploading..."
                            : selectedFile
                            ? "Upload"
                            : ""}
                    </span>
                </label>
                {selectedFile && (
                    <div>
                        <p>Selected file: {selectedFile.name}</p>
                    </div>
                )}
            </div>
        </AddonPanel>
    );
};
