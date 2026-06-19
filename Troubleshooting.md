
---

# Step 7: Final Content of `Troubleshooting.md`

```markdown
# Task 5: Troubleshooting Scenario

## Scenario 1

### Possible Reasons

1. Incorrect CMD or ENTRYPOINT.
2. Application file missing.
3. Missing dependencies.
4. Application crashed.
5. Port conflict.

### How will you debug?

docker ps -a

docker logs <container_id>

docker inspect <container_id>

docker run -it o2h-app sh

ls

---

## Scenario 2

### What will you check?

1. Firewall settings.
2. Port mapping.
3. Container status.
4. Network connectivity.
5. Environment variables.
6. Application logs.

### How will you identify the issue?

docker ps

netstat -tulnp

ping <server-ip>

curl localhost:3000

docker logs <container_id>