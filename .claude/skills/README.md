# Claude skills adapter

Mission skills live in `../.agents/skills/`.
When you add a skill directory with `SKILL.md` there, symlink it:

```bash
ln -sfn ../../.agents/skills/<name> .claude/skills/<name>
```

Or re-run `init-agents.sh apply <profile> . --force`.
