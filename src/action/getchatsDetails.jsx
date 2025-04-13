export default function getchatsDetails() {
  try {
    const result = [
      {
        type: "message",
        user_name: {
          receiver: "user123",
          sender: "user456",
        },
        name: "John Doe",
        from: "John Doe",
        time: "2025-04-13T10:30:00Z",
        message: "Hey! How are you?",
        media: null,
      },
      {
        type: "media",
        user_name: {
          receiver: "user789",
          sender: "user123",
        },
        name: "Jane Smith",
        from: "Jane Smith",
        time: "2025-04-13T11:15:00Z",
        message: "Check out this photo!",
        media: {
          type: "image",
          url: "https://example.com/image1.jpg",
        },
      },
      {
        type: "message",
        user_name: {
          receiver: "user456",
          sender: "user789",
        },
        name: "Alice Johnson",
        from: "Alice Johnson",
        time: "2025-04-13T12:45:00Z",
        message: "Let’s meet at 5 PM.",
        media: null,
      },
      {
        type: "media",
        user_name: {
          receiver: "user321",
          sender: "user654",
        },
        name: "Bob Lee",
        from: "Bob Lee",
        time: "2025-04-13T13:20:00Z",
        message: "Watch this video!",
        media: {
          type: "video",
          url: "https://example.com/video.mp4",
        },
      },
      {
        type: "message",
        user_name: {
          receiver: "user555",
          sender: "user999",
        },
        name: "Chris Walker",
        from: "Chris Walker",
        time: "2025-04-13T14:10:00Z",
        message: "Can you send the report?",
        media: null,
      },
      {
        type: "media",
        user_name: {
          receiver: "user888",
          sender: "user777",
        },
        name: "Lena Carter",
        from: "Lena Carter",
        time: "2025-04-13T15:00:00Z",
        message: "Here's the file you asked for.",
        media: {
          type: "document",
          url: "https://example.com/report.pdf",
        },
      },
      {
        type: "message",
        user_name: {
          receiver: "user222",
          sender: "user111",
        },
        name: "Derek Stone",
        from: "Derek Stone",
        time: "2025-04-13T15:45:00Z",
        message: "Meeting has been rescheduled.",
        media: null,
      },
      {
        type: "media",
        user_name: {
          receiver: "user654",
          sender: "user321",
        },
        name: "Nina Black",
        from: "Nina Black",
        time: "2025-04-13T16:30:00Z",
        message: "Loved this song!",
        media: {
          type: "audio",
          url: "https://example.com/song.mp3",
        },
      },
    ];

    return result;
  } catch (error) {
    return error;
  }
}
