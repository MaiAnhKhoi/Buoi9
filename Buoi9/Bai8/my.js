function toggleOption(changed) {
    const good = document.getElementById("good");
    const cheap = document.getElementById("cheap");
    const fast = document.getElementById("fast");

    const all = {
        good,
        cheap,
        fast
    };

    const selected = Object.keys(all).filter(key => all[key].checked);

    if (selected.length > 2) {
        const toKeep = [changed, ...selected.filter(key => key !== changed).slice(0, 1)];
        for (let key in all) {
            all[key].checked = toKeep.includes(key);
        }
    }
}
