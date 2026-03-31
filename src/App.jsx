import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wlkgxearhywnsdevwdvo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsa2d4ZWFyaHl3bnNkZXZ3ZHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NDI5NDEsImV4cCI6MjA5MDUxODk0MX0.xGnJYAtLRlAmnqDftw7txD1JxZZcTp_XO5UDRSbNC9w";

const supabase = createClient(supabaseUrl, supabaseKey);

const tierMap = {
  60: "HT1", 45: "LT1",
  30: "HT2", 20: "LT2",
  10: "HT3", 6: "LT3",
  4: "HT4", 3: "LT4",
  2: "HT5", 1: "LT5",
  0: "Unranked",
};

const gamemodes = [
  "overall",
  "sword","axe","uhc","pot","nethop","legacyop","mace","smp","diamondsmp","crystal","ogvanilla",
];

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const icons = {
  overall: "https://mctiers.com/tier_icons/overall.svg",
  sword: "https://mctiers.com/tier_icons/sword.svg",
  axe: "https://mctiers.com/tier_icons/axe.svg",
  uhc: "https://mctiers.com/tier_icons/uhc.svg",
  pot: "https://mctiers.com/tier_icons/pot.svg",
  nethop: "https://mctiers.com/tier_icons/nethop.svg",
  legacyop: "https://i.imgur.com/ThJVGu7.png",
  mace: "https://mctiers.com/tier_icons/mace.svg",
  smp: "https://mctiers.com/tier_icons/smp.svg",
  diamondsmp: "https://www.subtiers.net/assets/dia_smp-523efa38.svg",
  crystal: "https://mctiers.com/tier_icons/vanilla.svg",
  ogvanilla: "https://www.subtiers.net/assets/og_vanilla-bd47093f.svg",
};

const tierColumns = [1,2,3,4,5];

function getTier(points) {
  return tierMap[points] ?? "Unranked";
}

function getTierNumber(tier) {
  if (!tier) return null;
  return parseInt(tier.replace(/[^0-9]/g, ""));
}

function isHT(tier) {
  return tier?.startsWith("HT");
}

function getTierColor(tier) {
  const num = getTierNumber(tier);
  if (num === 1) return "bg-yellow-500/30 border-yellow-400";
  if (num === 2) return "bg-blue-500/30 border-blue-400";
  if (num === 3) return "bg-amber-600/30 border-amber-500";
  return "bg-gray-700 border-gray-600";
}

export default function App() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("overall");

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase.from("players").select("*");

    const withTotals = (data || []).map((p) => {
      const total = Object.keys(p).reduce((sum, key) => {
        if (key !== "name") return sum + (p[key] || 0);
        return sum;
      }, 0);
      return { ...p, overall: total };
    });

    setPlayers(withTotals);
  }

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  function getRank(player) {
    const sorted = [...players].sort((a, b) => b.overall - a.overall);
    return sorted.findIndex((p) => p.name === player.name) + 1;
  }

  function getColumns() {
    const cols = {1:[],2:[],3:[],4:[],5:[]};

    filtered.forEach((p) => {
      const tier = getTier(p[tab]);
      const num = getTierNumber(tier);
      if (!num) return;

      cols[num].push({ ...p, tier });
    });

    Object.keys(cols).forEach((c) => {
      cols[c].sort((a,b) => {
        if (isHT(a.tier) && !isHT(b.tier)) return -1;
        if (!isHT(a.tier) && isHT(b.tier)) return 1;
        return 0;
      });
    });

    return cols;
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-center mb-6">
        <img src="https://i.imgur.com/NKynxol.png" className="h-20" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {gamemodes.map((g) => (
          <button
            key={g}
            onClick={() => setTab(g)}
            className={`px-3 py-1 rounded flex items-center gap-2 ${tab === g ? "bg-blue-500" : "bg-gray-700"}`}
          >
            {icons[g] && <img src={icons[g]} className="w-4 h-4" />}
            {formatName(g)}
          </button>
        ))}
      </div>

      <input
        placeholder="Search player..."
        className="w-full p-3 mb-6 rounded-xl bg-gray-800 border-2 border-gray-600 focus:border-blue-500 outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
          setTab("overall");
        }}
      />

      {tab === "overall" && (
        <div className="space-y-2">
          {filtered
            .sort((a, b) => b.overall - a.overall)
            .map((player, index) => (
              <div
                key={player.name}
                className={`p-3 rounded flex justify-between cursor-pointer hover:bg-gray-700 ${index===0?"bg-yellow-600/30":index===1?"bg-gray-400/30":index===2?"bg-amber-700/30":"bg-gray-800"}`}
                onClick={() => setSelected(player)}
              >
                <div className="flex items-center gap-4">
                  <span>#{index + 1}</span>
                  <img src={`https://render.crafty.gg/3d/bust/${player.name}`} className="w-12" />
                  <span>{player.name}</span>
                  <span>{player.overall}</span>
                </div>

                <div className="grid grid-cols-2 md:flex gap-3 items-center text-xs">
                  {gamemodes.slice(1).filter((mode) => getTier(player[mode]) !== "Unranked").map((mode, i) => (
                    <div key={mode} className={`flex flex-col items-center ${i === gamemodes.slice(1).length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
                      <div className={`w-10 h-10 flex flex-col items-center justify-center rounded-xl border text-[9px] leading-tight ${getTierColor(getTier(player[mode]))}`}>
                        <img src={icons[mode]} className="w-4 h-4 mb-[2px]" />
                        <span>{getTier(player[mode])}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {tab !== "overall" && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tierColumns.map((tierNum, i) => (
            <div key={tierNum} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <div className="bg-gray-700 p-2 text-center font-bold text-lg">
                Tier {tierNum}
              </div>

              {getColumns()[tierNum].map((p) => (
                <div
                  key={p.name}
                  onClick={() => setSelected(p)}
                  className={`flex items-center gap-2 p-2 border-l-4 cursor-pointer hover:bg-gray-800 ${isHT(p.tier) ? "border-yellow-400 bg-gray-800" : "border-gray-600"}`}
                >
                  <img src={`https://render.crafty.gg/3d/bust/${p.name}`} className="w-8" />
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded w-[420px] max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 cursor-pointer"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={`https://render.crafty.gg/3d/full/${selected.name}`}
                className="w-24"
              />
              <div>
                <h2 className="text-xl">{selected.name}</h2>
                <div className="text-sm text-gray-300">Rank: #{getRank(selected)}
                </div>
                <div className="text-sm text-gray-300">Overall: {selected.overall}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {gamemodes.slice(1).map((mode, i) => (
                <div key={mode} className={`flex items-center gap-2 ${i === gamemodes.slice(1).length - 1 ? "col-span-2" : ""}`}>
                  <div className={`w-12 h-12 flex flex-col items-center justify-center rounded-xl border text-[10px] ${getTierColor(getTier(selected[mode]))}`}>
                    <img src={icons[mode]} className="w-4 h-4 mb-[2px]" />
                    <span>{getTier(selected[mode])}</span>
                  </div>
                  <span className="text-sm">{formatName(mode)}</span>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
