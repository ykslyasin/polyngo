import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Paper } from "@mui/material";
import App from "./App.css"



// Tool-specific command outputs
const toolOutputs = {

  
  aireplay1: (command) => {

    if (command.includes("aireplay-ng --deauth 0 -a 00:11:22:33:44:55 -c 66:77:88:99:AA:BB wlan0mon")) {

      return [
        "Hydra: Saldırı başlatılıyor...",
        "Başarılı !"
      ];
    }
    return ["Geçersiz komut."];
  },
  aireplay2: (command) => {
    if (command.includes("aireplay-ng --fakeauth 0 -a 00:11:22:33:44:55 -h 12:34:56:78:9A:BC wlan0mon")) {
      return [
        "Hydra: Saldırı başlatılıyor...",
        "Başarılı !"
      ];
    }
    return ["Geçersiz komut."];
  },
// sqlmap: SQL Injection saldırıları için
sqlmap1: (command) => {
  if (command.includes("sqlmap -u http://example.com/vulnerable.php?id=1 --dbs")) {
    return [
      "sqlmap: Veritabanları sorgulanıyor...",
      "Başarılı!",
    ];
  }
  return ["Geçersiz komut."];
},

sqlmap2: (command) => {
  if (command.includes("sqlmap -u http://example.com/vulnerable.php?id=1 --tables -D test_db")) {
    return [
      "sqlmap: Test veritabanındaki tablolar sorgulanıyor...",
      "Başarılı!",
    ];
  }
  return ["Geçersiz komut."];
},
};

const Terminal = ({ activeTool }) => {

  const [output, setOutput] = useState([]);
  const [command, setCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      if (command.trim() === "") return;

      setOutput((prevOutput) => [...prevOutput, `terminal@h4cktools:~$ ${command}`]);

      if (command.trim() === "clear") {
        setOutput([]); // Çıktıyı temizle
      } else {
        const toolOutput =
          toolOutputs[activeTool] &&
          typeof toolOutputs[activeTool] === "function"
            ? toolOutputs[activeTool](command)
            : ["Bilinmeyen komut veya araç."];
        simulateTyping(toolOutput);
      }

      setCommand("");
    }
  };

  const simulateTyping = (lines) => {
    setIsTyping(true);
    let index = 0;
    const interval = setInterval(() => {
      setOutput((prevOutput) => [...prevOutput, lines[index]]);
      index++;
      if (index >= lines.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 1000);
  };

  // Scroll to the bottom whenever output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: "#1e1e1e",
        color: "#ffffff",
        fontFamily: "Ubuntu Mono, monospace",
        padding: 2,
        borderRadius: 2,
        maxWidth: "800px",
        maxHeight: "200px", // Sabit yükseklik
        minHeight: "250px",
        overflowY: "auto", // Kaydırma çubuğu için
      }}
      ref={terminalRef}
    >
      <Box>
        {output.map((line, index) => (
          <Typography key={index} sx={{ whiteSpace: "pre-wrap" }}>
            {line}
          </Typography>
        ))}
        {isTyping && (
          <Box
            sx={{
              bgcolor: "#ffffff",
              width: "10px",
              height: "16px",
              display: "inline-block",
              fontFamily: "Ubuntu Mono, monospace",
              marginLeft: "2px",
              animation: "blink 1s steps(1) infinite",
              "@keyframes blink": {
                "0%, 50%": { opacity: 1 },
                "51%, 100%": { opacity: 0 },
              },
            }}
          />
        )}
      </Box>
      {!isTyping && (
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography sx={{ fontFamily:'Ubuntu Mono, monospace', color: "#00ff00", marginRight: 1, fontWeight:'bolder' }}>terminal@h4cktools:~$</Typography>
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { color: "#ffffff", fontFamily:"Ubunto Mono, monospace" },
            }}
            fullWidth
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
          />
        </Box>
      )}
    </Paper>
  );
};

export default Terminal;
