use anchor_lang::prelude::*;

declare_id!("YourIdentityProgramID"); // Replace with your identity program ID

#[program]
pub mod identity_verification {
    use super::*;

    pub fn verify_identity(ctx: Context<VerifyIdentity>, user: Pubkey, identity_hash: String) -> Result<()> {
        let identity_map = &mut ctx.accounts.identity_map;
        identity_map.user = user;
        identity_map.identity_hash = identity_hash;
        identity_map.verified = true;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct VerifyIdentity<'info> {
    #[account(init)]
    pub identity_map: ProgramAccount<'info, IdentityMap>,
    pub signer: Signer<'info>,
}

#[account]
pub struct IdentityMap {
    pub user: Pubkey,
    pub identity_hash: String,
    pub verified: bool,
}