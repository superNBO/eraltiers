import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import siteLogo from "./assets/ERALTIERS.png";
import overallIcon from "./assets/icons/overall.svg";
import swordIcon from "./assets/icons/sword.svg";
import axeIcon from "./assets/icons/axe.svg";
import uhcIcon from "./assets/icons/uhc.svg";
import potIcon from "./assets/icons/pot.svg";
import nethopIcon from "./assets/icons/nethop.svg";
import legacyopIcon from "./assets/icons/legacyop.png";
import maceIcon from "./assets/icons/mace.svg";
import cartIcon from "./assets/icons/minecart.svg";
import smpIcon from "./assets/icons/smp.svg";
import diamondsmpIcon from "./assets/icons/dia_smp.svg";
import crystalIcon from "./assets/icons/vanilla.svg";
import ogvanillaIcon from "./assets/icons/og_vanilla.svg";
import bowIcon from "./assets/icons/bow.svg";
import spearIcon from "./assets/icons/spear.png";
import legacyIcon from "./assets/icons/legacy.png";
import swordKit from "./assets/kitdetails/sword-detail.jpg";
import axeKit from "./assets/kitdetails/axe-detail.jpg";
import uhcKit from "./assets/kitdetails/uhc-detail.jpg";
import potKit from "./assets/kitdetails/pot-detail.jpg";
import nethopKit from "./assets/kitdetails/nethpot-detail.jpg";
import legacyopKit from "./assets/kitdetails/legacyop-detail.png";
import maceKit from "./assets/kitdetails/mace-detail.jpg";
import cartKit from "./assets/kitdetails/cart-detail.png";
import smpKit from "./assets/kitdetails/smp-detail.jpg";
import diamondsmpKit from "./assets/kitdetails/diasmp-detail.jpg";
import crystalKit from "./assets/kitdetails/crystal-detail.jpg";
import ogvanillaKit from "./assets/kitdetails/ogv-detail.jpg";
import bowKit from "./assets/kitdetails/bow-detail.png";
import spearKit from "./assets/kitdetails/spearmace-detail.png";
import legacyKit from "./assets/kitdetails/legacy-detail.png";

function InformationModal() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("titles");

  return (
    <>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl text-white transform transition-all duration-200 ease-in-out hover:scale-105">Information</button>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          style={{ animation: "modalFadeIn 180ms ease-out" }}
        >
          <div
            className="bg-[#0f172a] w-[420px] max-h-[80vh] rounded-2xl p-4 overflow-hidden relative"
            style={{ animation: "modalPopIn 220ms ease-out" }}
          >
            <button onClick={() => setOpen(false)} className="absolute top-3 right-4 text-white text-xl">✕</button>
            <div className="flex bg-gray-800 rounded-xl mb-4 overflow-hidden">
              <button onClick={() => setTab("titles")} className={`flex-1 py-2 ${tab === "titles" ? "bg-gray-700" : ""}`}>Titles</button>
              <button onClick={() => setTab("points")} className={`flex-1 py-2 ${tab === "points" ? "bg-gray-700" : ""}`}>Points</button>
            </div>
            <div className="overflow-y-auto max-h-[65vh] pr-2 text-white">
              {tab === "titles" && (
                <div>
                  <h2 className="text-lg mb-3">How to obtain Achievement Titles</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_grandmaster.webp" className="w-6" />
                      <div><div className="text-yellow-400">Combat Grandmaster</div><div className="text-sm text-gray-400">Obtained 300+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_master.webp" className="w-6" />
                      <div><div className="text-yellow-300">Combat Master</div><div className="text-sm text-gray-400">Obtained 200+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_ace.svg" className="w-6" />
                      <div><div className="text-pink-400">Combat Ace</div><div className="text-sm text-gray-400">Obtained 100+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_specialist.svg" className="w-6" />
                      <div><div className="text-purple-400">Combat Specialist</div><div className="text-sm text-gray-400">Obtained 50+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_cadet.svg" className="w-6" />
                      <div><div className="text-[rgb(196,181,253)]">Combat Pro</div><div className="text-sm text-gray-400">Obtained 25+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/combat_novice.svg" className="w-6" />
                      <div><div className="text-gray-300">Combat Novice</div><div className="text-sm text-gray-400">Obtained 10+ total points.</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://mctiers.com/titles/rookie.svg" className="w-6" />
                      <div><div className="text-gray-400">Rookie</div><div className="text-sm text-gray-400">Starting rank for players with less than 10 points.</div></div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "points" && (
                <div>
                  <h2 className="text-lg mb-3">How ranking points are calculated</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-yellow-400"><img src="https://mctiers.com/icons/tier_1.svg" className="w-5" /> Tier 1</div>
                      <div className="ml-6 flex gap-2 mt-1"><span className="bg-yellow-600/30 px-2 py-1 rounded">{"\u2191"} 60 Points</span><span className="bg-yellow-600/30 px-2 py-1 rounded">{"\u2193"} 45 Points</span></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-300"><img src="https://mctiers.com/icons/tier_2.svg" className="w-5" /> Tier 2</div>
                      <div className="ml-6 flex gap-2 mt-1"><span className="bg-gray-600/30 px-2 py-1 rounded">{"\u2191"} 30 Points</span><span className="bg-gray-600/30 px-2 py-1 rounded">{"\u2193"} 20 Points</span></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-orange-400"><img src="https://mctiers.com/icons/tier_3.svg" className="w-5" /> Tier 3</div>
                      <div className="ml-6 flex gap-2 mt-1"><span className="bg-orange-600/30 px-2 py-1 rounded">{"\u2191"} 10 Points</span><span className="bg-orange-600/30 px-2 py-1 rounded">{"\u2193"} 6 Points</span></div>
                    </div>
                    <div>
                      <div className="text-gray-400">Tier 4</div>
                      <div className="ml-6 flex gap-2 mt-1"><span className="bg-gray-500/20 px-2 py-1 rounded">{"\u2191"} 4 Points</span><span className="bg-gray-500/20 px-2 py-1 rounded">{"\u2193"} 3 Points</span></div>
                    </div>
                    <div>
                      <div className="text-gray-400">Tier 5</div>
                      <div className="ml-6 flex gap-2 mt-1"><span className="bg-gray-500/20 px-2 py-1 rounded">{"\u2191"} 2 Points</span><span className="bg-gray-500/20 px-2 py-1 rounded">{"\u2193"} 1 Point</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
  "sword","axe","uhc","pot","nethop","legacyop","mace","cart","smp","diamondsmp","crystal","ogvanilla","bow","spear","legacy",
];

function formatName(name) {
  if (name === "spear") return "Spear Mace";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const icons = {
  overall: overallIcon,
  sword: swordIcon,
  axe: axeIcon,
  uhc: uhcIcon,
  pot: potIcon,
  nethop: nethopIcon,
  legacyop: legacyopIcon,
  mace: maceIcon,
  cart: cartIcon,
  smp: smpIcon,
  diamondsmp: diamondsmpIcon,
  crystal: crystalIcon,
  ogvanilla: ogvanillaIcon,
  bow: bowIcon,
  spear: spearIcon,
  legacy: legacyIcon,
};

const kitImages = {
  sword: swordKit,
  axe: axeKit,
  uhc: uhcKit,
  pot: potKit,
  nethop: nethopKit,
  legacyop: legacyopKit,
  mace: maceKit,
  cart: cartKit,
  smp: smpKit,
  diamondsmp: diamondsmpKit,
  crystal: crystalKit,
  ogvanilla: ogvanillaKit,
  bow: bowKit,
  spear: spearKit,
  legacy: legacyKit,
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

function getTitle(points) {
  if (points >= 300) return "Combat Grandmaster";
  if (points >= 200) return "Combat Master";
  if (points >= 100) return "Combat Ace";
  if (points >= 50) return "Combat Specialist";
  if (points >= 25) return "Combat Pro";
  if (points >= 10) return "Combat Novice";
  return "Rookie";
}

const titleIcons = {
  "Combat Grandmaster": "https://mctiers.com/titles/combat_grandmaster.webp",
  "Combat Master": "https://mctiers.com/titles/combat_master.webp",
  "Combat Ace": "https://mctiers.com/titles/combat_ace.svg",
  "Combat Specialist": "https://mctiers.com/titles/combat_specialist.svg",
  "Combat Pro": "https://mctiers.com/titles/combat_cadet.svg",
  "Combat Novice": "https://mctiers.com/titles/combat_novice.svg",
  Rookie: "https://mctiers.com/titles/rookie.svg",
};

function getRankBackground(rank) {
  if (rank === 1) return "bg-yellow-600/30";
  if (rank === 2) return "bg-gray-400/30";
  if (rank === 3) return "bg-amber-700/30";
  return "bg-gray-800";
}

function getProfileRankBackground(rank) {
  if (rank === 1) return "bg-yellow-700";
  if (rank === 2) return "bg-gray-500";
  if (rank === 3) return "bg-amber-800";
  return "bg-gray-800";
}

export default function App() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("overall");
  const [showKit, setShowKit] = useState(false);
  const [fights, setFights] = useState([]);
  const [stats, setStats] = useState({});
  const [showAllFights, setShowAllFights] = useState(false);

  useEffect(() => {
    fetchPlayers();
    fetchFights();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase.from("players").select("*");

    const withTotals = (data || []).map((p) => {
      // Only count gamemode points, not every column
      const total = gamemodes
        .filter((g) => g !== "overall")
        .reduce((sum, mode) => {
          return sum + (Number(p[mode]) || 0);
        }, 0);

      return { ...p, overall: total };
    });

    setPlayers(withTotals);
  }

  async function fetchFights() {
    const { data } = await supabase
      .from("fight")
      .select("*")
      .order("created_at", { ascending: false });

    const fightsData = data || [];

    setFights(fightsData);

    // calculate accurate winrate stats from ALL fights
    const statsMap = {};

    fightsData.forEach((f) => {
      const { player1, player2, winner } = f;

      if (!statsMap[player1]) statsMap[player1] = { wins: 0, losses: 0 };
      if (!statsMap[player2]) statsMap[player2] = { wins: 0, losses: 0 };

      if (winner === player1) {
        statsMap[player1].wins++;
        statsMap[player2].losses++;
      } else if (winner === player2) {
        statsMap[player2].wins++;
        statsMap[player1].losses++;
      }
    });

    // convert to winrate
    Object.keys(statsMap).forEach((p) => {
      const { wins, losses } = statsMap[p];
      const total = wins + losses;
      statsMap[p].winrate = total > 0 ? Math.round((wins / total) * 100) : 0;
    });

    setStats(statsMap);
  }

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const searchResults = search.trim()
    ? [...filtered].sort((a, b) => b.overall - a.overall)
    : [];
  const visibleFights = showAllFights ? fights : fights.slice(0, 10);

  function getRank(player) {
    return players.filter((p) => p.overall > player.overall).length + 1;
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
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalPopIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <div className="flex justify-center mb-6">
        <img src={siteLogo} className="h-20" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {gamemodes.map((g) => (
          <button
            key={g}
            onClick={() => setTab(g)}
            className={`px-3 py-1 rounded flex items-center gap-2 transform transition-all duration-200 ease-in-out hover:scale-105 ${tab === g ? "bg-blue-500" : "bg-gray-700"}`}
          >
            {icons[g] && <img src={icons[g]} className="w-4 h-4" />}
            {formatName(g)}
          </button>
        ))}
      </div>

      {tab !== "overall" && (
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowKit(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            Kit Details
          </button>
        </div>
      )}

      <div className="flex gap-2 items-start mb-6">
        <div className="w-full relative">
          <input
            placeholder="Search player..."
            value={search}
            className="w-full p-3 rounded-xl bg-gray-800 border-2 border-gray-600 focus:border-blue-500 outline-none transition-all duration-200 ease-in-out"
            onChange={(e) => {
              setSearch(e.target.value);
              setTab("overall");
            }}
          />
          {searchResults.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-[#16233a] border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl z-40">
              {searchResults.map((player) => (
                <button
                  key={player.name}
                  type="button"
                  onClick={() => {
                    setSelected(player);
                    setSearch("");
                  }}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left border-b border-blue-900/30 last:border-b-0 hover:bg-[#1a2b45] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={`https://render.crafty.gg/3d/bust/${player.name}`}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="min-w-0">
                      <div className="text-blue-300 font-semibold truncate">{player.name}</div>
                      <div className="text-sm text-gray-400 truncate">{getTitle(player.overall)}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">#{getRank(player)}</div>
                </button>
              ))}
            </div>
          )}
        </div>
        <InformationModal />
      </div>

      {tab === "overall" && (
        <div className="space-y-2">
            {filtered
            .sort((a, b) => b.overall - a.overall)
            .map((player) => {
              const rank = getRank(player);
              return (
                <div
                  key={player.name}
                  className={`p-3 rounded flex justify-between cursor-pointer hover:bg-gray-700 transform transition-all duration-200 ease-in-out hover:scale-[1.02] ${getRankBackground(rank)}`}
                  onClick={() => setSelected(player)}
                >
                  <div className="flex items-center gap-4">
                    <span>#{rank}</span>
                    <img src={`https://render.crafty.gg/3d/bust/${player.name}`} className="w-12" />
                    <div className="flex flex-col">
                      <span>{player.name}</span>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{getTitle(player.overall)}</span>
                        <span className="text-yellow-400">({player.overall})</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:flex gap-3 items-center text-xs">
                    {gamemodes.slice(1)
                      .filter((mode) => getTier(player[mode]) !== "Unranked")
                      .map((mode) => (
                        <div key={mode} className="flex flex-col items-center">
                          <div className={`w-10 h-10 flex flex-col items-center justify-center rounded-xl border text-[9px] leading-tight ${getTierColor(getTier(player[mode]))}`}>
                            <img src={icons[mode]} className="w-4 h-4 mb-[2px]" />
                            <span>{getTier(player[mode])}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
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
                  className={`flex items-center gap-2 p-2 border-l-4 cursor-pointer hover:bg-gray-800 transform transition-all duration-200 ease-in-out hover:scale-[1.02] ${isHT(p.tier) ? "border-yellow-400 bg-gray-800" : "border-gray-600"}`}
                >
                  <img src={`https://render.crafty.gg/3d/bust/${p.name}`} className="w-8" />
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Fights */}
      <div className="mt-10">
        <h2 className="text-xl mb-4 text-center">Fights</h2>
        <div className="space-y-2 max-w-2xl mx-auto">
          {visibleFights.map((f, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded flex justify-between text-sm">
              <div className="flex gap-2">
                <span className="text-blue-400">{f.player1}</span>
                <span>vs</span>
                <span className="text-red-400">{f.player2}</span>
              </div>
              <div className="flex gap-4">
                <span>{f.score}</span>
                <span className="text-green-400">{f.winner}</span>
                <span className="text-gray-400">{formatName(f.gamemode)}</span>
              </div>
            </div>
          ))}
        </div>
        {fights.length > 10 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAllFights((prev) => !prev)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              {showAllFights ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4"
          style={{ animation: "modalFadeIn 180ms ease-out" }}
        >
          <div
            className={`${getProfileRankBackground(getRank(selected))} p-6 rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto relative shadow-2xl`}
            style={{ animation: "modalPopIn 220ms ease-out" }}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 cursor-pointer"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-black/20 border border-white/20 shrink-0 flex items-center justify-center">
                <img
                  src={`https://render.crafty.gg/3d/full/${selected.name}`}
                  className="w-full h-full object-cover scale-100"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl">{selected.name}</h2>
                <div className="flex items-center gap-2 text-xs text-gray-100 mt-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img src={titleIcons[getTitle(selected.overall)]} className="w-5 h-5 shrink-0" />
                    <span className="truncate">
                      {getTitle(selected.overall)} <span className="text-yellow-200">({selected.overall})</span>
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-100 mt-2">Rank: #{getRank(selected)}</div>
                <div className="text-sm text-gray-100">
                  Winrate: {stats[selected.name]?.winrate || 0}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {gamemodes.slice(1)
                .filter((mode) => getTier(selected[mode]) !== "Unranked")
                .map((mode) => (
                  <div
                    key={mode}
                    className="relative group"
                  >
                    <div
                      className={`w-full h-14 flex items-center justify-center gap-2 rounded-2xl border text-[10px] ${getTierColor(getTier(selected[mode]))}`}
                    >
                      <img src={icons[mode]} className="w-5 h-5 shrink-0" />
                      <span>{getTier(selected[mode])}</span>
                    </div>
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:opacity-100">
                      <div className="whitespace-nowrap rounded-lg border border-gray-500 bg-gray-900 px-3 py-2 text-[10px] text-white shadow-xl">
                        {formatName(mode)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {selected.clips && (
              <a
                href={selected.clips}
                target="_blank"
                rel="noreferrer"
                className="flex mt-5 w-full items-center justify-center px-4 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-sm text-white transition-all duration-200 ease-in-out hover:scale-[1.02]"
              >
                Clips/Montages
              </a>
            )}
          </div>
        </div>
      )}

      {showKit && tab !== "overall" && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-4 rounded max-w-3xl w-full relative transform transition-all duration-200 ease-in-out scale-100">
            <button
              className="absolute top-2 right-2 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700"
              onClick={() => setShowKit(false)}
            >
              ×
            </button>
            <h2 className="text-lg mb-3 text-center">
              {formatName(tab)} Kit {tab === "legacy" && "(1.8)"}
            </h2>
            <img src={kitImages[tab]} className="w-full rounded" />
          </div>
        </div>
      )}
    </div>
  );
}

