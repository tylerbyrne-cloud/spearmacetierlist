const tierSources = [
  {
    id: 'spear-mace',
    name: 'Spear Mace',
    description: 'Local Spear Mace tier source',
    players: [
      { name: 'hopeslyXD', tier: 'Tier 1', region: 'AU' },
      { name: 'matty_fr', tier: 'Tier 4', region: 'AU' },
      { name: 'Vesh__7', tier: 'Tier 1', region: 'AS' },
      { name: 'Yamine', tier: 'Tier 2', region: 'AS' },
      { name: 'kirraraa', tier: 'Tier 2', region: 'EU' },
      { name: 'P3ppaTryhard', tier: 'Tier 2', region: 'EU' },
      { name: '_SFox', tier: 'Tier 2', region: 'NA' },
      { name: 'GiantGreenHulk', tier: 'Tier 2', region: 'NA' },
      { name: 'piesel_777', tier: 'Tier 2', region: 'EU' },
      { name: 'WrittenEssay', tier: 'Tier 2', region: 'EU' },
      { name: 'Kingwastak3n', tier: 'Tier 2', region: 'EU' },
      { name: 'IklyyXYotsuba', tier: 'Tier 2', region: 'EU' },
      { name: 'Rompsik_', tier: 'Tier 2', region: 'EU' },
      { name: 'N1ght_veil', tier: 'Tier 2', region: 'EU' },
      { name: 'Shymanek7', tier: 'Tier 2', region: 'EU' },
      { name: 'Progisek', tier: 'Tier 2', region: 'EU' },
      { name: 'eellioorr11', tier: 'Tier 2', region: 'EU' },
      { name: 'Jvliansbest', tier: 'Tier 2', region: 'NA' },
      { name: 'kittylous', tier: 'Tier 2', region: 'EU' },
      { name: 'yclaudius', tier: 'Tier 2', region: 'EU' },
      { name: 'Japroyale', tier: 'Tier 2', region: 'EU' },
      { name: 'relaxed17', tier: 'Tier 2', region: 'EU' },
      { name: 'txn_chxdeo', tier: 'Tier 2', region: 'EU' },
      { name: 'LarsBrou', tier: 'Tier 3', region: 'EU' },
      { name: 'Itz_Jody', tier: 'Tier 3', region: 'NA' },
      { name: 'HannibalRoar', tier: 'Tier 3', region: 'EU' },
      { name: 'Boltclicker', tier: 'Tier 3', region: 'EU' },
      { name: 'beandean_', tier: 'Tier 3', region: 'NA' },
      { name: 'Lme__', tier: 'Tier 3', region: 'EU' },
      { name: 'LexMain_', tier: 'Tier 3', region: 'NA' },
      { name: 'Yusufiii', tier: 'Tier 3', region: 'EU' },
      { name: 'Swalified', tier: 'Tier 3', region: 'EU' },
      { name: 'SlowPiece', tier: 'Tier 3', region: 'EU' },
      { name: 'Masterleg_o', tier: 'Tier 3', region: 'NA' },
      { name: 'SuperSamuel31er', tier: 'Tier 3', region: 'EU' },
      { name: 'SnqwFlakes', tier: 'Tier 3', region: 'NA' },
      { name: 'Rinleaf', tier: 'Tier 3', region: 'AS' },
      { name: 'Trapchest', tier: 'Tier 3', region: 'NA' },
      { name: 'TheClownPro', tier: 'Tier 3', region: 'EU' },
      { name: 'Duckify_', tier: 'Tier 3', region: 'EU' },
      { name: 'ColledgeStudent', tier: 'Tier 3', region: 'AS' },
      { name: 'BlazeTLB', tier: 'Tier 3', region: 'EU' },
      { name: 'N1ght_veil', tier: 'Tier 4', region: 'EU' },
      { name: 'tenkwu', tier: 'Tier 4', region: 'NA' },
      { name: 'Artrix_Master', tier: 'Tier 4', region: 'EU' },
      { name: 'Gretacheada_', tier: 'Tier 4', region: 'NA' },
      { name: 'LeAnhNuoi', tier: 'Tier 4', region: 'AS' },
      { name: 'HT1_CzBrqlhexz', tier: 'Tier 4', region: 'EU' },
      { name: 'SkullWW8', tier: 'Tier 4', region: 'EU' },
      { name: 'Qlaqs', tier: 'Tier 4', region: 'EU' },
      { name: 'pvpers_', tier: 'Tier 4', region: 'EU' },
      { name: 'Clipeee', tier: 'Tier 4', region: 'AS' },
      { name: 'LunaVex__', tier: 'Tier 4', region: 'NA' },
      { name: '771hi', tier: 'Tier 4', region: 'AS' },
      { name: 'Koyota_23', tier: 'Tier 4', region: 'EU' },
      { name: 'ycshi', tier: 'Tier 4', region: 'EU' },
      { name: 'Hissaelion', tier: 'Tier 4', region: 'EU' },
      { name: 'AnchorMacroCPVP', tier: 'Tier 4', region: 'EU' },
      { name: 'TheLittleDuck_28', tier: 'Tier 4', region: 'EU' },
      { name: 'ilyShawn_', tier: 'Tier 4', region: 'NA' },
      { name: 'jacoblikeslifest', tier: 'Tier 4', region: 'NA' },
      { name: 'ahumanykk', tier: 'Tier 4', region: 'EU' },
      { name: 'Sealzzzzzz', tier: 'Tier 5', region: 'EU' },
      { name: 'Wedgrain', tier: 'Tier 5', region: 'EU' },
      { name: 'qrzs', tier: 'Tier 5', region: 'EU' },
      { name: 'WaxyTaxy', tier: 'Tier 5', region: 'EU' },
      { name: 'xKast_', tier: 'Tier 5', region: 'NA' },
      { name: 'Mo0nlight_jr', tier: 'Tier 5', region: 'EU' },
      { name: 'Dosq', tier: 'Tier 5', region: 'AS' },
      { name: '_SFox', tier: 'Tier 5', region: 'NA' },
      { name: 'Lumora_', tier: 'Tier 5', region: 'NA' },
      { name: 'SwimmerWho', tier: 'Tier 5', region: 'EU' },
      { name: 'TonyPapony', tier: 'Tier 5', region: 'EU' },
      { name: 'IamIcy_', tier: 'Tier 5', region: 'EU' },
      { name: 'sillyfy', tier: 'Tier 5', region: 'EU' },
      { name: 'ignHollow', tier: 'Tier 5', region: 'NA' },
      { name: 'xkingfan312', tier: 'Tier 5', region: 'NA' },
      { name: 'PaxysEgirl', tier: 'Tier 5', region: 'NA' },
      { name: 'olliemeows', tier: 'Tier 5', region: 'EU' },
      { name: 'Pr0xable', tier: 'Tier 5', region: 'EU' },
      { name: 'LucaHasTisms', tier: 'Tier 5', region: 'NA' },
      { name: 'OhhFrost', tier: 'Tier 5', region: 'EU' }
    ]
  }
];
const tierOrder = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];
const defaultTierSource = 'spear-mace';
const storageKey = 'spear-mace-tier-data';
const legacyStorageKey = 'spear-mace-tier-tags';

function loadTierData() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        if ('tags' in parsed && 'newPlayers' in parsed && 'showTiers' in parsed) {
          return {
            tags: parsed.tags || {},
            newPlayers: parsed.newPlayers || [],
            showTiers: parsed.showTiers !== false,
            removedPlayers: parsed.removedPlayers || [],
            tierSource: parsed.tierSource || defaultTierSource
          };
        }
      }
    }

    const legacyRaw = window.localStorage.getItem(legacyStorageKey);
    if (legacyRaw) {
      const parsed = JSON.parse(legacyRaw);
      if (parsed && typeof parsed === 'object') {
        return {
          tags: parsed,
          newPlayers: [],
          showTiers: true,
          removedPlayers: [],
          tierSource: defaultTierSource
        };
      }
    }
  } catch {
    // Ignore parse errors and return defaults.
  }

  return {
    tags: {},
    newPlayers: [],
    showTiers: true,
    removedPlayers: [],
    tierSource: defaultTierSource
  };
}

function saveTierData(data) {
  window.localStorage.setItem(storageKey, JSON.stringify(data));
}

function loadTierTags() {
  return loadTierData().tags;
}

function loadRemovedPlayers() {
  return loadTierData().removedPlayers || [];
}

function isTierGridVisible() {
  return loadTierData().showTiers !== false;
}

function setTierGridVisibility(show) {
  const data = loadTierData();
  data.showTiers = show;
  saveTierData(data);
  updateTierGridVisibility();
}

function updateTierGridVisibility() {
  const grid = document.getElementById('tier-grid');
  const toggle = document.getElementById('toggle-tiers-button');
  if (!grid || !toggle) return;

  const visible = isTierGridVisible();
  grid.style.display = visible ? '' : 'none';
  toggle.textContent = visible ? 'Hide tiers completely' : 'Show tiers';
}

function loadNewPlayers() {
  return loadTierData().newPlayers;
}

function loadTierSource() {
  const sourceId = loadTierData().tierSource || defaultTierSource;
  return tierSources.find(source => source.id === sourceId) || tierSources[0];
}

function saveTierSource(sourceId) {
  const data = loadTierData();
  data.tierSource = sourceId;
  saveTierData(data);
}

function saveTierTags(tags) {
  const data = loadTierData();
  data.tags = tags;
  saveTierData(data);
}

function saveNewPlayers(newPlayers) {
  const data = loadTierData();
  data.newPlayers = newPlayers;
  saveTierData(data);
}

function saveRemovedPlayers(removedPlayers) {
  const data = loadTierData();
  data.removedPlayers = removedPlayers;
  saveTierData(data);
}

function getAllPlayers() {
  const data = loadTierData();
  const source = loadTierSource();
  const allPlayers = [...(source.players || [])];
  const removedPlayers = new Set(data.removedPlayers || []);

  data.newPlayers.forEach(newPlayer => {
    const existingIndex = allPlayers.findIndex(player => player.name.toLowerCase() === newPlayer.name.toLowerCase());
    if (existingIndex >= 0) {
      allPlayers[existingIndex] = newPlayer;
    } else {
      allPlayers.push(newPlayer);
    }
  });

  return allPlayers.filter(player => !removedPlayers.has(player.name.toLowerCase()));
}

function renderTierSourceOptions() {
  const select = document.getElementById('tier-source-select');
  const summary = document.getElementById('tier-source-summary');
  if (!select || !summary) return;

  const currentSource = loadTierSource();
  select.innerHTML = tierSources
    .map(source => `<option value="${source.id}">${source.name}</option>`)
    .join('');
  select.value = currentSource.id;
  summary.textContent = `Using ${currentSource.name} local tiers.`;
}

function setTierSource(sourceId) {
  saveTierSource(sourceId);
  renderTierSourceOptions();
  renderTierGrid();
}

function getPlayerData(name) {
  return getAllPlayers().find(player => player.name.toLowerCase() === name.toLowerCase());
}

function getPlayerTier(player) {
  const tags = loadTierTags();
  return tags[player.name.toLowerCase()] || player.tier;
}

function getNameMCUrl(playerName) {
  return `https://namemc.com/profile/${encodeURIComponent(playerName)}`;
}

function getSkinPreviewUrl(playerName) {
  return `https://mc-heads.net/body/${encodeURIComponent(playerName)}/120`;
}

function renderTierGrid() {
  const grid = document.getElementById('tier-grid');
  if (!grid) return;

  const tags = loadTierTags();
  const data = loadTierData();
  const newPlayerNames = data.newPlayers.map(player => player.name.toLowerCase());
  const groups = tierOrder.map(tier => ({ tier, players: [] }));

  getAllPlayers().forEach(player => {
    const tier = tags[player.name.toLowerCase()] || player.tier;
    const group = groups.find(group => group.tier === tier);
    const customTier = newPlayerNames.includes(player.name.toLowerCase()) || tier !== player.tier;

    if (group) {
      group.players.push({ ...player, tier, customTier });
    }
  });

  grid.innerHTML = groups
    .map(group => {
      const content = group.players.length
        ? `<ul>${group.players
            .map(player => `
                <li class="${player.customTier ? 'tagged' : ''}">
                  <span class="player-name" data-player="${player.name}">${player.name}</span>
                  <span class="region">${player.region}</span>
                </li>`)
            .join('')}</ul>`
        : '<div class="empty-tier">No players assigned to this tier yet.</div>';

      return `
        <article class="tier-card tier-${group.tier.slice(-1)}">
          <div class="tier-label">${group.tier.toUpperCase()}</div>
          ${content}
        </article>`;
    })
    .join('');
}


function renderSearchResults(matches, query) {
  const result = document.getElementById('search-result');
  if (!result) return;

  if (!query) {
    result.innerHTML = 'Enter a player name to see tier and region details.';
    return;
  }

  if (matches.length === 0) {
    result.innerHTML = `No players found for “<strong>${query}</strong>”.`;
    return;
  }

  const listContent = matches
    .map(player => {
      const tier = getPlayerTier(player);
      const custom = tier !== player.tier || loadNewPlayers().some(np => np.name.toLowerCase() === player.name.toLowerCase())
        ? ' <span class="player-tier">custom</span>'
        : '';
      const profileUrl = getNameMCUrl(player.name);
      const skinImage = getSkinPreviewUrl(player.name);

      return `
        <a class="search-card" href="${profileUrl}" target="_blank" rel="noopener noreferrer">
          <div class="search-card-avatar">
            <img src="${skinImage}" alt="${player.name} skin preview" loading="lazy" />
          </div>
          <div class="search-card-meta">
            <div class="search-card-title">${player.name}</div>
            <div class="search-card-info">${tier} · ${player.region}${custom}</div>
          </div>
        </a>`;
    })
    .join('');

  result.innerHTML = `<div class="search-summary">Found ${matches.length} result${matches.length > 1 ? 's' : ''} for “<strong>${query}</strong>”</div>${listContent}`;
}


function renderPlayerProfile(player) {
  const section = document.querySelector('.player-profile-section');
  const panel = document.getElementById('player-profile-panel');
  const skinImg = document.getElementById('profile-skin-img');
  const nameText = document.getElementById('profile-name-text');
  const tierText = document.getElementById('profile-tier-text');
  const regionText = document.getElementById('profile-region-text');
  if (!section || !panel || !skinImg || !nameText || !tierText || !regionText) return;

  const tier = getPlayerTier(player);
  const displayTier = player.name.toLowerCase() === 'hopeslyxd' ? 'High Tier 1' : tier;
  skinImg.src = getSkinPreviewUrl(player.name);
  skinImg.alt = `${player.name} skin preview`;
  nameText.textContent = player.name;
  nameText.classList.toggle('tier-1', tier === 'Tier 1');
  tierText.textContent = `Tier: ${displayTier}`;
  regionText.textContent = `Region: ${player.region}`;
  section.classList.add('visible');
  panel.classList.add('visible');
}

function hidePlayerProfile() {
  const section = document.querySelector('.player-profile-section');
  const panel = document.getElementById('player-profile-panel');
  if (!section || !panel) return;
  section.classList.remove('visible');
  panel.classList.remove('visible');
}

function searchPlayer() {
  const input = document.getElementById('player-search');
  const query = input ? input.value.trim() : '';
  const normalized = query.toLowerCase();
  const matches = normalized
    ? getAllPlayers().filter(player => player.name.toLowerCase().includes(normalized))
    : [];

  renderSearchResults(matches, query);
}

function showTaggerMessage(message, status = 'info') {
  const messageElement = document.getElementById('tagger-message');
  if (!messageElement) return;
  messageElement.textContent = message;
  messageElement.className = `tagger-message ${status}`;
}

function tagPlayer() {
  if (!loadAuthState()) {
    setAuthMessage('Please log in before tagging players.', 'error');
    return;
  }

  const nameInput = document.getElementById('tag-player-name');
  const tierSelect = document.getElementById('tag-player-tier');
  const regionInput = document.getElementById('tag-player-region');

  if (!nameInput || !tierSelect || !regionInput) return;

  const playerName = nameInput.value.trim();
  const newTier = tierSelect.value;
  const region = regionInput.value.trim().toUpperCase();

  if (!playerName) {
    showTaggerMessage('Please enter a player name before tagging.', 'error');
    return;
  }

  const normalizedName = playerName.toLowerCase();
  const data = loadTierData();
  const tags = data.tags;
  const sourcePlayers = getAllPlayers();

  if (data.removedPlayers.includes(normalizedName)) {
    data.removedPlayers = data.removedPlayers.filter(name => name !== normalizedName);
    saveTierData(data);
  }

  const player = sourcePlayers.find(player => player.name.toLowerCase() === normalizedName);

  if (!player) {
    if (!region) {
      showTaggerMessage('Enter a region to add a new player.', 'error');
      return;
    }

    const newPlayers = loadNewPlayers();
    const normalizedName = playerName.toLowerCase();
    const existingIndex = newPlayers.findIndex(np => np.name.toLowerCase() === normalizedName);
    const newPlayer = {
      name: playerName,
      tier: newTier,
      region: region
    };

    if (existingIndex >= 0) {
      newPlayers[existingIndex] = newPlayer;
    } else {
      newPlayers.push(newPlayer);
    }

    saveNewPlayers(newPlayers);
    renderTierGrid();
    showTaggerMessage(`${playerName} was added to ${newTier}.`, 'success');
    return;
  }

  if (newTier === player.tier) {
    delete tags[player.name.toLowerCase()];
    saveTierTags(tags);
    renderTierGrid();
    showTaggerMessage(`${player.name} is now back to ${newTier}.`, 'success');
    return;
  }

  tags[player.name.toLowerCase()] = newTier;
  saveTierTags(tags);
  renderTierGrid();
  showTaggerMessage(`${player.name} is now assigned to ${newTier}.`, 'success');
}

function removePlayer() {
  if (!loadAuthState()) {
    setAuthMessage('Please log in before removing players.', 'error');
    return;
  }

  const nameInput = document.getElementById('tag-player-name');
  if (!nameInput) return;

  const playerName = nameInput.value.trim();
  if (!playerName) {
    showTaggerMessage('Enter a player name to remove.', 'error');
    return;
  }

  const normalizedName = playerName.toLowerCase();
  const data = loadTierData();
  const tags = data.tags || {};
  const newPlayers = data.newPlayers || [];
  const sourcePlayers = getAllPlayers();
  const isExistingPlayer = sourcePlayers.some(player => player.name.toLowerCase() === normalizedName);
  const isNewPlayer = newPlayers.some(player => player.name.toLowerCase() === normalizedName);

  if (!isExistingPlayer && !isNewPlayer) {
    showTaggerMessage(`${playerName} is not in the tier list.`, 'error');
    return;
  }

  data.newPlayers = newPlayers.filter(player => player.name.toLowerCase() !== normalizedName);
  if (tags[normalizedName]) {
    delete tags[normalizedName];
  }

  const removed = new Set(data.removedPlayers || []);
  removed.add(normalizedName);
  data.removedPlayers = Array.from(removed);
  data.tags = tags;
  saveTierData(data);

  renderTierGrid();
  showTaggerMessage(`${playerName} has been removed from the tier list.`, 'success');
}

const AUTH_STORAGE_KEY = 'spear-mace-auth';
const AUTH_USER = 'hopeslyXD';
const AUTH_PASS = 'exodia1706';

function loadAuthState() {
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw === 'true') return true;
  } catch {
    // ignore
  }
  return false;
}

function saveAuthState(isAuthenticated) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, String(isAuthenticated));
}

function setAuthMessage(message, status = 'info') {
  const authMessage = document.getElementById('auth-message');
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.className = `auth-message ${status}`;
}

function setTaggerAccessibility(isAuthenticated) {
  const taggerFields = document.querySelectorAll('.tagger-field input, .tagger-field select, .tagger-actions button');
  taggerFields.forEach(control => {
    control.disabled = !isAuthenticated;
  });

  const loginGate = document.getElementById('login-gate');
  if (loginGate) {
    loginGate.classList.toggle('authenticated', isAuthenticated);
  }
}

function updateAuthUI(isAuthenticated) {
  const showLoginButton = document.getElementById('show-login-button');
  const logoutButton = document.getElementById('logout-button');
  const loginForm = document.getElementById('login-form');
  const loginGateMessage = document.querySelector('.login-gate-message p');

  if (showLoginButton) showLoginButton.classList.toggle('hidden', isAuthenticated);
  if (logoutButton) logoutButton.classList.toggle('hidden', !isAuthenticated);
  if (loginForm) loginForm.classList.add('hidden');

  if (loginGateMessage) {
    loginGateMessage.textContent = isAuthenticated
      ? 'You are signed in. The tagger is now available.'
      : 'Sign in to use the tier tagger.';
  }

  setTaggerAccessibility(isAuthenticated);
}

function authenticate() {
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');

  if (!usernameInput || !passwordInput) return false;

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (username === AUTH_USER && password === AUTH_PASS) {
    saveAuthState(true);
    updateAuthUI(true);
    setAuthMessage('Logged in successfully.', 'success');
    return true;
  }

  setAuthMessage('Invalid username or password.', 'error');
  return false;
}

function signOut() {
  saveAuthState(false);
  updateAuthUI(false);
  setAuthMessage('You have been signed out.', 'info');
}

function toggleLoginForm(show) {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;
  loginForm.classList.toggle('hidden', !show);
}

function resetTierTags() {
  const data = loadTierData();
  data.tags = {};
  saveTierData(data);
  renderTierGrid();
  showTaggerMessage('All custom tier assignments have been reset. Player roster is unchanged.', 'success');
}

document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const input = document.getElementById('player-search');
  const button = document.getElementById('search-button');
  const tagButton = document.getElementById('tag-player-button');
  const resetButton = document.getElementById('reset-tags-button');
  const sourceSelect = document.getElementById('tier-source-select');

  if (button) {
    button.addEventListener('click', searchPlayer);
  }

  if (resetButton) {
    resetButton.addEventListener('click', function () {
      if (!loadAuthState()) {
        setAuthMessage('Please log in before resetting tier tags.', 'error');
        return;
      }
      resetTierTags();
    });
  }

  if (input) {
    input.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        searchPlayer();
      }
    });
  }

  if (tagButton) {
    tagButton.addEventListener('click', tagPlayer);
  }

  if (sourceSelect) {
    sourceSelect.addEventListener('change', function () {
      setTierSource(sourceSelect.value);
      showTaggerMessage(`Tier source set to ${sourceSelect.selectedOptions[0]?.textContent}.`, 'success');
    });
  }

  const toggleButton = document.getElementById('toggle-tiers-button');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      setTierGridVisibility(!isTierGridVisible());
      showTaggerMessage(isTierGridVisible() ? 'Tier cards are visible.' : 'Tier cards are hidden.', 'info');
    });
  }

  const removeButton = document.getElementById('remove-player-button');
  if (removeButton) {
    removeButton.addEventListener('click', removePlayer);
  }

  const showLoginButton = document.getElementById('show-login-button');
  const logoutButton = document.getElementById('logout-button');
  const loginSubmitButton = document.getElementById('login-submit-button');
  const loginCancelButton = document.getElementById('login-cancel-button');

  if (showLoginButton) {
    showLoginButton.addEventListener('click', function () {
      toggleLoginForm(true);
      setAuthMessage('Enter your credentials to sign in.', 'info');
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      signOut();
    });
  }

  if (loginSubmitButton) {
    loginSubmitButton.addEventListener('click', function () {
      authenticate();
    });
  }

  if (loginCancelButton) {
    loginCancelButton.addEventListener('click', function () {
      toggleLoginForm(false);
      setAuthMessage('', '');
    });
  }

  const closeProfileButton = document.getElementById('close-profile-button');
  if (closeProfileButton) {
    closeProfileButton.addEventListener('click', hidePlayerProfile);
  }

  const profileSection = document.querySelector('.player-profile-section');
  if (profileSection) {
    profileSection.addEventListener('click', function (event) {
      if (event.target === profileSection) {
        hidePlayerProfile();
      }
    });
  }

  const tierGrid = document.getElementById('tier-grid');
  if (tierGrid) {
    tierGrid.addEventListener('click', function (event) {
      const target = event.target.closest('.player-name');
      if (!target) return;
      const playerName = target.dataset.player;
      const player = getPlayerData(playerName);
      if (!player) return;
      renderPlayerProfile(player);
    });
  }

  const infoButton = document.querySelector('.info-button');
  const infoPanel = document.getElementById('info-panel');
  if (infoButton && infoPanel) {
    infoButton.addEventListener('click', function () {
      infoPanel.classList.toggle('open');
      infoButton.textContent = infoPanel.classList.contains('open') ? 'HIDE INFO' : 'INFORMATION';
    });
  }

  renderTierSourceOptions();
  renderTierGrid();
  updateTierGridVisibility();
  const isAuthenticated = loadAuthState();
  updateAuthUI(isAuthenticated);
  showTaggerMessage('Use the tagger to move players between tiers.', 'info');
});
